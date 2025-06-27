import { Controller, Get } from '@nestjs/common';
import { ReceiptsService } from './receipts.service';

@Controller()
export class ReceiptsController {
  constructor(private readonly receiptsService: ReceiptsService) {}

  @Get()
  getHello(): string {
    return this.receiptsService.getHello();
  }
}
