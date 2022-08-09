import { Module } from '@nestjs/common';
import { CovidApiAjaxModule } from 'src/covid-api-ajax/covid-api-ajax.module';
import { CsvConverterModule } from 'src/csv-converter/csv-converter.module';
import { ProcessService } from './process.service';

@Module({
  imports: [CovidApiAjaxModule, CsvConverterModule],
  providers: [ProcessService],
  exports: [ProcessService],
})
export class ProcessModule {}
