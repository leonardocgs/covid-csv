import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { GOFILE_TOKEN } from 'config';
import { getFormattedDate } from 'util/data';
import { CovidData } from './interfaces/CovidData';
import * as fs from 'fs';
import * as FormData from 'form-data';
import { FileInformation } from './interfaces/FileInformation';

@Injectable()
export class CovidApiAjaxService {
  private covidApiUrl = 'https://disease.sh/v3/covid-19/countries/';
  private goFileUrl = `https://store1.gofile.io/uploadFile`;
  private createForm(fileInformation: FileInformation, goFileFolderId: string) {
    const form = new FormData();
    form.append(
      fileInformation.fileName,
      fs.createReadStream(fileInformation.filePath),
      fileInformation.fileName,
    );
    form.append('token', GOFILE_TOKEN);
    form.append('folderId', goFileFolderId);
    return form;
  }
  async get(country: string): Promise<CovidData> {
    const completeUrl = this.covidApiUrl + country;
    const axiosResponse = await axios.get(completeUrl);
    const {
      country: countryReturnedByApi,
      todayCases,
      todayDeaths,

      active,
      critical,
    } = axiosResponse.data;
    const covidData: CovidData = {
      country: countryReturnedByApi,
      todayCases,
      todayDeaths,
      date: getFormattedDate(new Date()),
      active,
      critical,
    };

    return covidData;
  }

  async post(fileInformation: FileInformation, goFileFolderId: string) {
    const form = this.createForm(fileInformation, goFileFolderId);
    const formHeader = form.getHeaders();

    await axios.post(this.goFileUrl, form, {
      headers: { ...formHeader },
    });
  }
}
