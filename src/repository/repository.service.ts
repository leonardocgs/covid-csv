import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CovidCsvDocument } from './covid-csv.schema';
import { CovidCsvDto } from './dto/covid-csv.dto';

@Injectable()
export class RepositoryService {
  constructor(
    @InjectModel('Covid-csv') private covidCsvModel: Model<CovidCsvDocument>,
  ) {}
  async create(createCovidCsvDto: CovidCsvDto) {
    const createdCovidCsv = new this.covidCsvModel(createCovidCsvDto);
    return createdCovidCsv.save();
  }
  async getByDate(date: string): Promise<CovidCsvDto> {
    const covidCsv = await this.covidCsvModel.findOne({ date });
    return covidCsv;
  }
}
