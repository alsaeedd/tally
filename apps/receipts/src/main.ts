import { NestFactory } from '@nestjs/core';
import { ReceiptsModule } from './receipts.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ReceiptsModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3002,
      },
    },
  );
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: { target: false },
      forbidUnknownValues: true,
    }),
  );
  await app.listen();
}
bootstrap();
