import { Test, TestingModule } from '@nestjs/testing';
import { ProviService } from './provi.service';

describe('ProviService', () => {
  let service: ProviService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviService],
    }).compile();

    service = module.get<ProviService>(ProviService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
