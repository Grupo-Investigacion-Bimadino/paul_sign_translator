import { Module } from '@nestjs/common';
import { ArchivosService } from './archivos.service';
import { ArchivosController } from './archivos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './schemas/chatMessage.schema';

@Module({
  imports: [
    // adicionar esto
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    
export class ArchivosModule {}