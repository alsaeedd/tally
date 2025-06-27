import { Injectable } from '@nestjs/common';

@Injectable()
export class TallyApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
