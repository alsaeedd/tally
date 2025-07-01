import { Injectable } from '@nestjs/common';
import { Receipt } from './receipts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReceiptsService {
  constructor(
    @InjectRepository(Receipt)
    private receiptsRepository: Repository<Receipt>,
  ) {}

  async createReceipt(
    userId: string,
    imageData: any,
    filename: string,
  ): Promise<Receipt> {
    const receipt = this.receiptsRepository.create({
      user_id: userId,
      image_path: filename,
      amount: 25.99, // Still dummy for now
      vendor: 'Test Vendor', // Still dummy for now
      date: new Date(),
      category: 'Office Supplies', // Still dummy for now
    });
    return this.receiptsRepository.save(receipt);
  }

  async findReceiptsByUser(userId: string): Promise<Receipt[]> {
    return this.receiptsRepository.findBy({ user_id: userId });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
