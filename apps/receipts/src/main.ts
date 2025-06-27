import { NestFactory } from '@nestjs/core';
import { ReceiptsModule } from './receipts.module';

async function bootstrap() {
  const app = await NestFactory.create(ReceiptsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
