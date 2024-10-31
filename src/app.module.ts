import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArchivosModule } from './archivos/archivos.module';
import { AudiosModule } from './audios/audios.module';
import { SignificadosModule } from './significados/significados.module';
import { PalabrasModule } from './palabras/palabras.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jvegalomineth10:bZ9tTtAahdidPQO8@cluster0.1vujg.mongodb.net/translator_db?retryWrites=true&w=majority&appName=Cluster0',
    ),
    ArchivosModule,
    AudiosModule,
    SignificadosModule,
    PalabrasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
