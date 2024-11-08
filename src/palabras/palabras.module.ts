import { Module } from '@nestjs/common';
import { PalabrasService } from './palabras.service';
import { PalabrasController } from './palabras.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Palabras, MessageSchema } from './schema/palabras.schema';

@Module({
  imports: [

    MongooseModule.forFeature([{ name: Palabras.name, schema: MessageSchema }]),
  ],

  controllers: [PalabrasController],
  providers: [PalabrasService],
})
export class PalabrasModule {}
