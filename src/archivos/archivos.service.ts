import { Injectable } from '@nestjs/common';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { archivos } from './schema/archivos.schema';

@Injectable()
export class ArchivosService {
  constructor(@InjectModel(archivos.name) private archivosModel: Model<archivos>) {}

  async create(createArchivoDto: CreateArchivoDto) {
    const createdarchivos = new this.archivosModel(createArchivoDto);
    const result = await createdarchivos.save();
    return  result;
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
      id, 
      name: 'jesus', 
      url: 'google.com/cariño', 
      size: '5mb', 
      format:'.mp3'
    };
  }

  update(id: number, updateArchivoDto: UpdateArchivoDto) {
    return {
      id,
      updateArchivoDto,
    };
  }

  remove(id: number) {
    return {
      id,
    };
  }
}
