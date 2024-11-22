import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class archivos extends Document {

  @Prop()
  nombre: string;

  @Prop()
  url: string;

  @Prop()
  tamaño: string;

  @Prop()
  formato: string;
}

export const MessageSchema = SchemaFactory.createForClass(archivos);
