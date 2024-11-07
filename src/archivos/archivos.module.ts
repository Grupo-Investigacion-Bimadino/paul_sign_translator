import { Module } from '@nestjs/common';
import { archivosService } from './archivos.service';
import { archivosController } from './archivos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { archivos, archivosSchema } from './schemas/archivosMessage.schema';
import { archivos } from './schema/archivos.schema';

@Module({
  imports: [
    // adicionar esto
    MongooseModule.forFeature([{ name: archivos.name, schema: archivosschema }]),
    
export class archivosModule {}