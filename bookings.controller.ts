// src/bookings/bookings.controller.ts
import { Controller, Post, Get, Delete, Param, Body, Patch } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  async create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.create(createBookingDto);
  }

  @Get()
  async findAll() {
    return this.bookingsService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.bookingsService.delete(id);
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body() body: { status: string }) {
    return this.bookingsService.updateStatus(id, body.status);
  }
}
