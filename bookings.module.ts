import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { Booking, BookingSchema } from './schemas/booking.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]), // 👈 Thêm dòng này
  ],
  controllers: [BookingsController],
  providers: [BookingsService],
  exports: [BookingsService], // 👈 Đảm bảo exports nếu cần dùng ở module khác
})
export class BookingsModule {}
