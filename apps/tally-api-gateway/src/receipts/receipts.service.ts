import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ReceiptsService {
  constructor(@Inject('RECEIPTS_CLIENT') private receiptsClient: ClientProxy) {}

  createReceipt(file: Express.Multer.File) {
    return this.receiptsClient.send('receipts.create', {
      user_id: '1',
      image_data: file.buffer.toString('base64'),
      filename: file.originalname,
    });
  }

  findReceiptsByUser() {
    return this.receiptsClient.send('receipts.findReceiptsByUser', {});
  }
}
