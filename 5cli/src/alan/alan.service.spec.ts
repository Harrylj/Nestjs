import { Test, TestingModule } from '@nestjs/testing';
import { AlanService } from './alan.service';

describe('AlanService', () => {
  let service: AlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlanService],
    }).compile();

    service = module.get<AlanService>(AlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
