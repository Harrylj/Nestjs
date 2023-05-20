import { Injectable } from '@nestjs/common';
import { CreateAlanDto } from './dto/create-alan.dto';
import { UpdateAlanDto } from './dto/update-alan.dto';

@Injectable()
export class AlanService {
  create(createAlanDto: CreateAlanDto) {
    return 'This action adds a new alan';
  }

  findAll() {
    return `This action returns all alan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alan`;
  }

  update(id: number, updateAlanDto: UpdateAlanDto) {
    return `This action updates a #${id} alan`;
  }

  remove(id: number) {
    return `This action removes a #${id} alan`;
  }
}
