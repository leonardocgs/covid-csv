import { Injectable } from '@nestjs/common';
import { CovidApiAjaxService } from 'src/covid-api-ajax/covid-api-ajax.service';
import { FileInformation } from 'src/covid-api-ajax/interfaces/FileInformation';
import { CsvConverterService } from 'src/csv-converter/csv-converter.service';
import { getDashedDate } from 'util/data';
import { removeFile } from 'util/folder';

@Injectable()
export class ProcessService {
  private countriesCovidData = [];
  private countries: string[];
  private fileInformation: FileInformation;
  constructor(
    private covidApiAjaxService: CovidApiAjaxService,
    private csvConverterService: CsvConverterService,
  ) {}
  private async setContriesCovidData() {
    this.countriesCovidData = [];
    for await (const country of this.countries) {
      const contryCovidData = await this.covidApiAjaxService.get(country);

      this.countriesCovidData.push(contryCovidData);
    }
  }
  private setFileInformation() {
    const date = getDashedDate();

    const fileName = this.countries.join('-') + '-' + date + '.csv';
    const filePath = `csv/${fileName}`;
    this.fileInformation = { fileName, filePath };
  }

  async excecute(goFileFolderId: string, ...countries: string[]) {
    this.countries = countries;

    await this.setContriesCovidData();
    this.setFileInformation();
    await this.csvConverterService.convert(
      this.fileInformation.filePath,
      ...this.countriesCovidData,
    );

    await this.covidApiAjaxService.post(this.fileInformation, goFileFolderId);
    await removeFile(this.fileInformation.filePath);
  }
}
