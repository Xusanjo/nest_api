import { Test, TestingModule } from '@nestjs/testing';
import { KurslarController } from './kurslar.controller';
import { KurslarService } from './kurslar.service';

describe('KurslarController', () => {
  let controller: KurslarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KurslarController],
      providers: [KurslarService],
    }).compile();

    controller = module.get<KurslarController>(KurslarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
