import { Controller, Get } from '@nestjs/common';
import { TallyApiGatewayService } from './tally-api-gateway.service';

@Controller()
export class TallyApiGatewayController {
  constructor(private readonly tallyApiGatewayService: TallyApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.tallyApiGatewayService.getHello();
  }
}
