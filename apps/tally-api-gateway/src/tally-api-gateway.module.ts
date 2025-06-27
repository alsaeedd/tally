import { Module } from '@nestjs/common';
import { TallyApiGatewayController } from './tally-api-gateway.controller';
import { TallyApiGatewayService } from './tally-api-gateway.service';

@Module({
  imports: [],
  controllers: [TallyApiGatewayController],
  providers: [TallyApiGatewayService],
})
export class TallyApiGatewayModule {}
