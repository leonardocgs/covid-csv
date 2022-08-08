import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CovidApiAjaxService } from './covid-api-ajax/covid-api-ajax.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const CovidApiAjax = app.get(CovidApiAjaxService);
  const brazilCovidData = await CovidApiAjax.get('brazil');
  console.log(brazilCovidData);
}
bootstrap();
