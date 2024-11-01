import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class audios extends Document {
  @Prop()
  Nombre: string;

  @Prop()
  duracion: string;

  @Prop()
  fecha_de_creacion: string;

  @Prop()
  etiqueta: string;

  @Prop()
  favorito: string;

  @Prop()
  tiempo_pausa: string;

  @Prop()
  estado: string;


}

export const MessageSchema = SchemaFactory.createForClass(audios);