import { NestFactory } from '@nestjs/core';
import { ReceiptsModule } from './receipts.module';

async function bootstrap() {
  const app = await NestFactory.create(ReceiptsModule);
  await app.listen(3002);
}
bootstrap();
