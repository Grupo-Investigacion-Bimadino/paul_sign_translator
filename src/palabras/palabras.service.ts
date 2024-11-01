import { Injectable } from '@nestjs/common';
import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';

@Injectable()
export class PalabrasService {
  create(createPalabraDto: CreatePalabraDto) {
    return createPalabraDto;
  }

  findAll() {
    return 
    [
      {
        id: 1, 
        text: 'jesus', 
        Image: 'representacion grafica'
      },
      {
        id: 2, 
        text: 'jesusdsada', 
        Image: 'representacion grafica'
      },
      {
        id: 3, 
        text: 'jesusdsadaaa', 
        Image: 'representacion grafica'
      }
    ];
  }

  findOne(id: number) {
    return {
      id: 1,
      text: 'jesus',
      Image: 'representacion'
    }
    ;
  }

  update(id: number, updatePalabraDto: UpdatePalabraDto) {
    return {
      id: id,
      updatePalabraDto,
    };
  }

  remove(id: number) {
    return {
      id,
    };
  }
}