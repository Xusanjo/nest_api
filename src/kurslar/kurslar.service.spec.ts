import { Test, TestingModule } from '@nestjs/testing';
import { KurslarService } from './kurslar.service';

describe('KurslarService', () => {
  let service: KurslarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KurslarService],
    }).compile();

    service = module.get<KurslarService>(KurslarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
