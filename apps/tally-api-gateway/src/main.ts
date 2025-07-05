import { NestFactory } from '@nestjs/core';
import { TallyApiGatewayModule } from './tally-api-gateway.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(TallyApiGatewayModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: { target: false },
      forbidUnknownValues: true,
    }),
  );
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
