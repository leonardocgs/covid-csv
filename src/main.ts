import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProcessService } from './process/process.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const processService = app.get(ProcessService);
  processService.excecute(
    '1763023c-fd70-42e2-b838-b5398cdccb04',
    'japan',
    'venezuela',
  );
}
bootstrap();
