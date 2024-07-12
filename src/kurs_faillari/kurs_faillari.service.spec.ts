import { Test, TestingModule } from '@nestjs/testing';
import { KursFaillariService } from './kurs_faillari.service';

describe('KursFaillariService', () => {
  let service: KursFaillariService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KursFaillariService],
    }).compile();

    service = module.get<KursFaillariService>(KursFaillariService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
