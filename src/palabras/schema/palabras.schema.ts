import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Palabras extends Document {
  @Prop()
  content: string;


  @Prop()
  text: string;

  @Prop()
  representacion_grafica: string;


}

export const MessageSchema = SchemaFactory.createForClass(Palabras);
