import { Test, TestingModule } from '@nestjs/testing';
import { ReceiptsController } from './receipts.controller';
import { ReceiptsService } from './receipts.service';

describe('ReceiptsController', () => {
  let receiptsController: ReceiptsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReceiptsController],
      providers: [ReceiptsService],
    }).compile();

    receiptsController = app.get<ReceiptsController>(ReceiptsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(receiptsController.getHello()).toBe('Hello World!');
    });
  });
});
