import { Test, TestingModule } from '@nestjs/testing';
import { AlanController } from './alan.controller';
import { AlanService } from './alan.service';

describe('AlanController', () => {
  let controller: AlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlanController],
      providers: [AlanService],
    }).compile();

    controller = module.get<AlanController>(AlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
