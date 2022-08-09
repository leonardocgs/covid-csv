import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CovidCsvSchema } from './covid-csv.schema';
import { RepositoryService } from './repository.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Covid-csv', schema: CovidCsvSchema }]),
  ],
  providers: [RepositoryService],
  exports: [RepositoryService],
})
export class RepositoryModule {}
