// src/venues/venues.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venue, VenueDocument } from './schemas/venue.schema';

@Injectable()
export class VenuesService {
  constructor(@InjectModel(Venue.name) private venueModel: Model<VenueDocument>) {}

  async create(name: string, location: string, capacity: number): Promise<Venue> {
    const newVenue = new this.venueModel({ name, location, capacity });
    return newVenue.save();
  }

  async findAll(): Promise<Venue[]> {
    return this.venueModel.find().exec();
  }

  async findById(id: string): Promise<Venue> {
    return this.venueModel.findById(id).exec();
  }

  async update(id: string, name: string, location: string, capacity: number): Promise<Venue> {
    return this.venueModel.findByIdAndUpdate(id, { name, location, capacity }, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    const result = await this.venueModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException('Venue not found');
    }
  }
}
