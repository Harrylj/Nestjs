import { PartialType } from '@nestjs/mapped-types';
import { CreateAlanDto } from './create-alan.dto';

export class UpdateAlanDto extends PartialType(CreateAlanDto) {}
