import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignificadosService } from './significados.service';
import { CreateSignificadoDto } from './dto/create-significado.dto';
import { UpdateSignificadoDto } from './dto/update-significado.dto';

@Controller('significados')
export class SignificadosController {
  constructor(private readonly significadosService: SignificadosService) {}

  @Post()
  create(@Body() createSignificadoDto: CreateSignificadoDto) {
    return this.significadosService.create(createSignificadoDto);
  }

  @Get()
  findAll() {
    return this.significadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.significadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignificadoDto: UpdateSignificadoDto) {
    return this.significadosService.update(+id, updateSignificadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.significadosService.remove(+id);
  }
}
