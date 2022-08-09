import { Injectable, Logger, UseFilters } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BRASIL_USA_FOLDER_ID, CHINA_RUSSIA_FOLDER_ID } from 'config';
import { ProcessService } from 'src/process/process.service';
import { RepositoryService } from 'src/repository/repository.service';
import { getData } from 'util/data';
import { SentException } from './error/SentError.exception';
import { SentExceptionFilter } from './filter/SentException.filter';

@Injectable()
export class IndexService {
  private currentData: string;
  private readonly logger = new Logger(IndexService.name);
  constructor(
    private processService: ProcessService,
    private repositoryService: RepositoryService,
  ) {}
  async isSent() {
    const covidCsv = await this.repositoryService.getByDate(this.currentData);

    return covidCsv?.isSent;
  }

  @Cron(CronExpression.EVERY_DAY_AT_11PM, { timeZone: 'America/Bahia' })
  async excecute() {
    this.currentData = getData();
    const isSent = await this.isSent();
    if (isSent) {
      throw new SentException();
    }
    await this.processService.excecute(BRASIL_USA_FOLDER_ID, 'brazil', 'usa');
    await this.processService.excecute(
      CHINA_RUSSIA_FOLDER_ID,
      'china',
      'russia',
    );
    this.logger.log('Csv sent');
    await this.repositoryService.create({
      date: this.currentData,
      isSent: true,
    });
  }
}
