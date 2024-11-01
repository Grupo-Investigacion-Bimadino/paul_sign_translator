import { Injectable } from '@nestjs/common';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';

@Injectable()
export class AudiosService {
  create(createAudioDto: CreateAudioDto) {
    return createAudioDto;
  }

  findAll() {
    return [
      {
        id: 1,
        name1: 'Esteban Regino',
        duracion: 5,
        date: 31/10/2024,
        etiqueta1: 'juegos',
        favoritos: 'si',
        tiempodepausa1: 5,
      },
      { 
        id: 2,
        name2: 'Mario Ramos',
        duracion: 10  ,
        date: 31/10/2024,
        etiqueta1: 'estudios',
        favoritos: 'si',
        tiempodepausa1: 6,
        
      },
    ];
  }

  findOne(id: number) {
    return {
      id: 1,
      name1: 'Esteban Regino',
      duracion: '5',
      date: '31/10/2024',
      etiqueta1: 'juegos',
      favoritos: 'si',
      tiempodepausa1: '5',
    } ;
  }

  update(id: number, updateAudioDto: UpdateAudioDto) {
    return {
      id: id,
      updateAudioDto,
    };
  }

  remove(id: number) {
    return {
      id,
    };
  }
}
