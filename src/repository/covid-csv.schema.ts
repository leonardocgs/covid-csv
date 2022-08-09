import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CovidCsvDocument = CovidCsv & Document;
@Schema()
export class CovidCsv {
  @Prop({ required: true })
  date: string;
  @Prop({ required: true })
  isSent: boolean;
}
export const CovidCsvSchema = SchemaFactory.createForClass(CovidCsv);
