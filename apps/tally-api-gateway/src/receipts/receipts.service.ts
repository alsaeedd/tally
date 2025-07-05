import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ReceiptsService {
  constructor(@Inject('RECEIPTS_CLIENT') private receiptsClient: ClientProxy) {}

  createReceipt(file: Express.Multer.File, userId: string) {
    return this.receiptsClient.send('receipts.create', {
      user_id: userId,
      image_data: file.buffer.toString('base64'),
      filename: file.originalname,
    });
  }

  findReceiptsByUser(userId: string) {
    return this.receiptsClient.send('receipts.findReceiptsByUser', {
      user_id: userId,
    });
  }
}
