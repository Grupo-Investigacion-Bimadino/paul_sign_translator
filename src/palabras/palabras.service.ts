import { Injectable } from '@nestjs/common';
import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Palabra } from './entities/palabra.entity';
import { Palabras } from './schema/palabras.schema';

@Injectable()
export class PalabrasService {
  constructor(@InjectModel(Palabras.name) private palabrasModel: Model<Palabras>) {}
 async create(createPalabraDto: CreatePalabraDto) {
    const createpalabras = new this.palabrasModel(createPalabraDto);
    const result = await createpalabras.save();
    return  result;
  }

  findAll() {
    return this.palabrasModel.find();
    
  }

  findOne(id: string) {
    return this.palabrasModel.findById(id);
  }

  async update(id: string, updatePalabraDto: UpdatePalabraDto) {
    try{
      const updatepalabra = await this.palabrasModel.findByIdAndUpdate(
        id, updatePalabraDto, {new: true}
      );
      return updatepalabra
     
    }
    finally{
      console.log("actualizado");

    }
  }

  async remove(id: string) {
    try{
      const deletepalabras = await this.palabrasModel.findByIdAndDelete(id)
      return deletepalabras;
    }
    finally{

    }
  }
}