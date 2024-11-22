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

  async findAll() {
    return this.archivosModel.find();
     
      
  }

  async findOne(id: string) {
    return this.archivosModel.findById(id);
     
  }

  async update(id: string, updateArchivoDto: UpdateArchivoDto) {
    try{
      const updatearchivo = await this.archivosModel.findByIdAndUpdate(
        id, updateArchivoDto, {new: true}
      );
      return updatearchivo
     
    }
    finally{
      console.log("actualizado");

    }
  }

  async remove(id: string) {
    try{
      const deletearchivo = await this.archivosModel.findByIdAndDelete(id)
      return deletearchivo;
    }
    finally{

    }
  }
  
}
