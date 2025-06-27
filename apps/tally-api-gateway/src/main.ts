import { NestFactory } from '@nestjs/core';
import { TallyApiGatewayModule } from './tally-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(TallyApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
