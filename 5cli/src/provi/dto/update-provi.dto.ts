import { PartialType } from '@nestjs/mapped-types';
import { CreateProviDto } from './create-provi.dto';

export class UpdateProviDto extends PartialType(CreateProviDto) {}
