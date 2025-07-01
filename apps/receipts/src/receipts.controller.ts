import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { MessagePattern } from '@nestjs/microservices';
import { Receipt } from './receipts.entity';

@UseInterceptors(ClassSerializerInterceptor)
@Controller()
export class ReceiptsController {
  constructor(private readonly receiptsService: ReceiptsService) {}

  @MessagePattern('receipts.create')
  async createReceipt(data: {
    user_id: string;
    image_data: string; // base64 string now
    filename: string;
  }): Promise<Receipt> {
    return this.receiptsService.createReceipt(
      data.user_id,
      data.image_data,
      data.filename,
    );
  }

  @MessagePattern('receipts.findReceiptsByUser')
  async findReceiptsByUser(data: { user_id: string }): Promise<Receipt[]> {
    return this.receiptsService.findReceiptsByUser(data.user_id);
  }

  @MessagePattern('receipts.getHello')
  getHello(): string {
    return this.receiptsService.getHello();
  }
}
