// src/bookings/bookings.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from './schemas/booking.schema';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  constructor(@InjectModel(Booking.name) private bookingModel: Model<BookingDocument>) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const newBooking = new this.bookingModel(createBookingDto);
    return newBooking.save();
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingModel.find().exec();
  }

  async findById(id: string): Promise<Booking> {
    return this.bookingModel.findById(id).exec();
  }

  async delete(id: string): Promise<void> {
    const result = await this.bookingModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException('Booking not found');
    }
  }

  async updateStatus(id: string, status: string): Promise<Booking> {
    return this.bookingModel.findByIdAndUpdate(id, { status }, { new: true }).exec();
  }
}
