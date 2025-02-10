// src/venues/venues.controller.ts
import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { VenuesService } from './venues.service';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Post()
  async create(@Body() body: { name: string; location: string; capacity: number }) {
    return this.venuesService.create(body.name, body.location, body.capacity);
  }

  @Get()
  async findAll() {
    return this.venuesService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: { name: string; location: string; capacity: number }) {
    return this.venuesService.update(id, body.name, body.location, body.capacity);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.venuesService.delete(id);
  }
}
