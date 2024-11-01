import { Injectable } from '@nestjs/common';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';

@Injectable()
export class ArchivosService {
  create(createArchivoDto: CreateArchivoDto) {
    return createArchivoDto;
  }

  findAll() {
    return [
      {
        id: 1, 
        name: 'jesus', 
        url: 'google.com/cariño', 
        size: '5mb', 
        format:'.mp3'
      },
      {
        id: 2,
         name: 'Esteban', 
         url: 'google.com/arbol', 
         size: '3mb', 
         format:'.mp3'
      },
      {
        id: 3, 
        name: 'jesus', 
        url: 'google.com/casa', 
        size: '1mb', 
        format:'.mp3'
      }
    ];
  }

  findOne(id: number) {
    return {
      id: 1, 
      name: 'jesus', 
      url: 'google.com/cariño', 
      size: '5mb', 
      format:'.mp3'
    };
  }

  update(id: number, updateArchivoDto: UpdateArchivoDto) {
    return {
      id: id,
      updateArchivoDto,
    };
  }

  remove(id: number) {
    return {
      id,
    };
  }
}
