import { Module } from '@nestjs/common';
import { CovidApiAjaxService } from './covid-api-ajax.service';

@Module({
  providers: [CovidApiAjaxService],
  exports: [CovidApiAjaxService],
})
export class CovidApiAjaxModule {}
