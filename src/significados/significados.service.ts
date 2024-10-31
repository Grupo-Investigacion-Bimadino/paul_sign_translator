import { Injectable } from '@nestjs/common';
import { CreateSignificadoDto } from './dto/create-significado.dto';
import { UpdateSignificadoDto } from './dto/update-significado.dto';

@Injectable()
export class SignificadosService {
  create(createSignificadoDto: CreateSignificadoDto) {
    return 'This action adds a new significado';
  }

  findAll() {
    return `This action returns all significados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} significado`;
  }

  update(id: number, updateSignificadoDto: UpdateSignificadoDto) {
    return `This action updates a #${id} significado`;
  }

  remove(id: number) {
    return `This action removes a #${id} significado`;
  }
}
