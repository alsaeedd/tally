import { Test, TestingModule } from '@nestjs/testing';
import { TallyApiGatewayController } from './tally-api-gateway.controller';
import { TallyApiGatewayService } from './tally-api-gateway.service';

describe('TallyApiGatewayController', () => {
  let tallyApiGatewayController: TallyApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TallyApiGatewayController],
      providers: [TallyApiGatewayService],
    }).compile();

    tallyApiGatewayController = app.get<TallyApiGatewayController>(TallyApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tallyApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
