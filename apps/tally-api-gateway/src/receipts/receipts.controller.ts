import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  Request,
} from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('receipts')
export class ReceiptsController {
  constructor(private receiptsService: ReceiptsService) {}

  @Get('find')
  @UseGuards(JwtAuthGuard)
  findReceiptsByUser(@Request() req) {
    console.log('User from JWT:', req.user);
    return this.receiptsService.findReceiptsByUser(req.user.id);
  }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('receipt'))
  createReceipt(@UploadedFile() file: Express.Multer.File, @Request() req) {
    return this.receiptsService.createReceipt(file, req.user.id); // Pass real user ID
  }
}
