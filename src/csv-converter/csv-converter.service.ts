import { Injectable } from '@nestjs/common';
import { CovidData } from 'src/covid-api-ajax/interfaces/CovidData';
import * as fs from 'node:fs/promises';

@Injectable()
export class CsvConverterService {
  private fileName: string;
  /*
This method has the purpose to convert a CovidData object to a line
which will be used later as a csv row.
*/
  private convertObjectToLine(covidData: CovidData) {
    const covidDataValues = Object.values(covidData);

    const covidDataValuesSeparetedByComma = covidDataValues.join(',') + '\n';
    return covidDataValuesSeparetedByComma;
  }
  private async writeOneLine(sourceObject) {
    const line = this.convertObjectToLine(sourceObject);
    await fs.appendFile(this.fileName, line);
  }
  private async setCsvHeader(...header: string[]) {
    const headerSepByComma = header.join(',') + '\n';
    await fs.appendFile(this.fileName, headerSepByComma);
  }
  async convert(fileName: string, ...countriesData: CovidData[]) {
    this.fileName = fileName;
    await this.setCsvHeader(
      'País',
      'Casos hojes',
      'Total de morte hoje',
      'Data',
      'Ativos',
      'Em estado crítico',
    );
    countriesData.forEach((countryData: CovidData) =>
      this.writeOneLine(countryData),
    );
  }
}
