import { Injectable } from '@nestjs/common';
import { CreateSignificadoDto } from './dto/create-significado.dto';
import { UpdateSignificadoDto } from './dto/update-significado.dto';

@Injectable()
export class SignificadosService {
  create(createSignificadoDto: CreateSignificadoDto) {
    return createSignificadoDto;
  }

  findAll() {
    return 
    [
      {
        id: 1, 
        text: 'casas', 
        Image: 'seña'
      },
      {
        id: 2, 
        text: 'perro', 
        Image: 'seña'
      },
      {
        id: 3, 
        text: 'carro', 
        Image: 'seña'
      }
      
    ];
  }

  findOne(id: number) {
    return {
      id: 1, 
      text: 'casas', 
      Image: 'seña'
    };
  }

  update(id: number, updateSignificadoDto: UpdateSignificadoDto) {
    return {
      id: id,
      updateSignificadoDto,
    };
  }

  remove(id: number) {
    return {
      id,
    };
  }
}
