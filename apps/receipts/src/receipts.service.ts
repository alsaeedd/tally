import { Injectable } from '@nestjs/common';
import { Receipt } from './receipts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Anthropic from '@anthropic-ai/sdk';

@Injectable()
export class ReceiptsService {
  constructor(
    @InjectRepository(Receipt)
    private receiptsRepository: Repository<Receipt>,
  ) {}

  async extractReceiptData(imageData: string) {
    const anthropic = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY });

    const message = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: 'image/jpeg',
                data: imageData,
              },
            },
            {
              type: 'text',
              text: `Extract receipt data as JSON: 
              {
                "amount": total_amount,
                "vendor": business_name,
                "date": "YYYY-MM-DD",
                "category": "Food" | "Entertainment" | "Office Supplies" | "Transportation" | "Other",
                "items": [
                  {"name": "item_name", "price": amount}
                ]
              }`,
            },
          ],
        },
      ],
    });

    const textBlock = message.content[0] as any;
    return JSON.parse(textBlock.text);
  }

  getHello(): string {
    return 'Hello World!';
  }

  async createReceipt(
    userId: string,
    imageData: any,
    filename: string,
  ): Promise<Receipt> {
    const ocrData = await this.extractReceiptData(imageData);

    const receipt = this.receiptsRepository.create({
      user_id: userId,
      image_path: filename,
      amount: ocrData.amount,
      vendor: ocrData.vendor,
      items: ocrData.items,
      date: new Date(ocrData.date),
      category: ocrData.category,
    });

    return this.receiptsRepository.save(receipt);
  }

  async findReceiptsByUser(userId: string): Promise<Receipt[]> {
    return this.receiptsRepository.findBy({ user_id: userId });
  }
}
