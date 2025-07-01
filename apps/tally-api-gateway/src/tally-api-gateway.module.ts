import { Module } from '@nestjs/common';
import { TallyApiGatewayController } from './tally-api-gateway.controller';
import { TallyApiGatewayService } from './tally-api-gateway.service';
import { AuthModule } from './auth/auth.module';
import { ReceiptsModule } from './receipts/receipts.module';

@Module({
  imports: [AuthModule, ReceiptsModule],
  controllers: [TallyApiGatewayController],
  providers: [TallyApiGatewayService],
})
export class TallyApiGatewayModule {}
