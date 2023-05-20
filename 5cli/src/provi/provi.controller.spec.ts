import { Test, TestingModule } from '@nestjs/testing';
import { ProviController } from './provi.controller';
import { ProviService } from './provi.service';

describe('ProviController', () => {
  let controller: ProviController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProviController],
      providers: [ProviService],
    }).compile();

    controller = module.get<ProviController>(ProviController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
