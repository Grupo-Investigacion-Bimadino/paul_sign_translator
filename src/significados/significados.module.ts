import { Module } from '@nestjs/common';
import { SignificadosService } from './significados.service';
import { SignificadosController } from './significados.controller';

@Module({
  controllers: [SignificadosController],
  providers: [SignificadosService],
})
export class SignificadosModule {}
