import { Module } from '@nestjs/common';
import { CovidApiAjaxModule } from './covid-api-ajax/covid-api-ajax.module';

@Module({
  imports: [CovidApiAjaxModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
