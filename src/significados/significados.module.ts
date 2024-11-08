import { Module } from '@nestjs/common';
import { SignificadosService } from './significados.service';
import { SignificadosController } from './significados.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { significado, MessageSchema } from './schema/significado.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: significado.name, schema: MessageSchema }]),
  ],
  controllers: [SignificadosController],
  providers: [SignificadosService],
})
export class SignificadosModule {}
