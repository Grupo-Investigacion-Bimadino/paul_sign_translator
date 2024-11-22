import { Injectable } from '@nestjs/common';
import { CreateSignificadoDto } from './dto/create-significado.dto';
import { UpdateSignificadoDto } from './dto/update-significado.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { significado } from './schema/significado.schema';

@Injectable()
export class SignificadosService {
  constructor(@InjectModel(significado.name) private significadosModel: Model<significado>) {}
  async create(createSignificadoDto: CreateSignificadoDto) {
    const createsignicado = new this.significadosModel(createSignificadoDto);
    const result = await createsignicado.save();
    return  result;
  }

  findAll() {
    return this.significadosModel.find();
  }

  findOne(id: string) {
    return this.significadosModel.findById(id);
  }

 async update(id: string, updateSignificadoDto: UpdateSignificadoDto) {
  try{
    const updatesignificado = await this.significadosModel.findByIdAndUpdate(
      id, updateSignificadoDto, {new: true}
    );
    return updatesignificado
   
  }
  finally{
    console.log("actualizado");

  }
  }

 async remove(id: string) {
    try{
      const deletesignificado = await this.significadosModel.findByIdAndDelete(id)
      return deletesignificado;
    }
    finally{

    }
  }
  }

