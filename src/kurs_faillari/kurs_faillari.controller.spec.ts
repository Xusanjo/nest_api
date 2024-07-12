import { Test, TestingModule } from '@nestjs/testing';
import { KursFaillariController } from './kurs_faillari.controller';
import { KursFaillariService } from './kurs_faillari.service';

describe('KursFaillariController', () => {
  let controller: KursFaillariController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KursFaillariController],
      providers: [KursFaillariService],
    }).compile();

    controller = module.get<KursFaillariController>(KursFaillariController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
