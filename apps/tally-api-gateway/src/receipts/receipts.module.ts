import { Module } from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { ReceiptsController } from './receipts.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RECEIPTS_CLIENT',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
  ],
  providers: [ReceiptsService],
  controllers: [ReceiptsController],
})
export class ReceiptsModule {}
