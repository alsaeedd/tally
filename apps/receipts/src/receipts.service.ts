import { Injectable } from '@nestjs/common';

@Injectable()
export class ReceiptsService {
  getHello(): string {
    return 'Hello World!';
  }
}
