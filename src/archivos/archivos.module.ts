import { Module } from '@nestjs/common';
import { ArchivosService } from './archivos.service';
import { ArchivosController } from './archivos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Archivos, ArchivosSchema } from './schemas/Archivos.schema';


@Module({
  imports: [
    // adicionar esto
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    //hasta aqui
  ],

export class ArchivosModule {}
