import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { DB_URI } from 'config';
import { IndexModule } from './index/index.module';

@Module({
  imports: [
    MongooseModule.forRoot(DB_URI),
    IndexModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
