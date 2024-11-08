import { Module } from '@nestjs/common';
import { AudiosService } from './audios.service';
import { AudiosController } from './audios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { audios, MessageSchema } from './schema/audios.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: audios.name, schema: MessageSchema }]),
  ],
  controllers: [AudiosController],
  providers: [AudiosService],
})
export class AudiosModule {}