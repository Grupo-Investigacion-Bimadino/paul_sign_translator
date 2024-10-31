import { PartialType } from '@nestjs/mapped-types';
import { CreateSignificadoDto } from './create-significado.dto';

export class UpdateSignificadoDto extends PartialType(CreateSignificadoDto) {}
