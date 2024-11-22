import { Injectable } from '@nestjs/common';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { audios } from './schema/audios.schema';

@Injectable()
export class AudiosService {
  constructor(@InjectModel(audios.name) private audiosModel: Model<audios>) {}
  async create(createAudioDto: CreateAudioDto) {
    const createdaudios = new this.audiosModel(createAudioDto);
    const result = await createdaudios.save();
    return  result;
    

  }

  findAll() {
    return this.audiosModel.find();
     
  }

  findOne(id: string) {
    return this.audiosModel.findById(id);
  }

  async update(id: string, updateAudioDto: UpdateAudioDto) {
    try{
      const updateaudio = await this.audiosModel.findByIdAndUpdate(
        id, updateAudioDto, {new: true}
      );
      return updateaudio
     
    }
    finally{
      console.log("actualizado");

    }
  }

  async remove(id: string) {
    try{
      const deleteaudio = await this.audiosModel.findByIdAndDelete(id)
      return deleteaudio;
    }
    finally{

    }
  }
}
