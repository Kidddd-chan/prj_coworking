// src/venues/schemas/venue.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VenueDocument = Venue & Document;

@Schema()
export class Venue {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop()
  capacity: number;
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
