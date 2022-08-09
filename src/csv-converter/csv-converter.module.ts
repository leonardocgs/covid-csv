import { Module } from '@nestjs/common';
import { CsvConverterService } from './csv-converter.service';

@Module({
  providers: [CsvConverterService],
  exports: [CsvConverterService],
})
export class CsvConverterModule {}
