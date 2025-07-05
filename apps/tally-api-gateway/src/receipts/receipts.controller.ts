import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { FileInterceptor } from '@nestjs/platform-express';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('receipts')
export class ReceiptsController {
  constructor(private receiptsService: ReceiptsService) {}

  @Get('find')
  findReceiptsByUser() {
    return this.receiptsService.findReceiptsByUser();
  }

  @Post('create')
  @UseInterceptors(FileInterceptor('receipt'))
  createReceipt(@UploadedFile() file: Express.Multer.File) {
    return this.receiptsService.createReceipt(file);
  }
}
