import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class significado extends Document {
  @Prop()
  seña: string;

  @Prop()
  texto: string;

  @Prop({ default: () => new Date() })
  timestamp: Date;
}

export const MessageSchema = SchemaFactory.createForClass(significado);