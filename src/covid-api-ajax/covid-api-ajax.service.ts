import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CovidData } from './interfaces/CovidData';

@Injectable()
export class CovidApiAjaxService {
  private covidApiUrl = 'https://disease.sh/v3/covid-19/countries/';

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

      active,
      critical,
      date: new Date(),
    };
    return covidData;
  }
}
