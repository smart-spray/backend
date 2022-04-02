import axios, { AxiosRequestConfig } from "axios";

interface GetWeatherParams {
  city: string;
  state: string;
}

export class ClimatempoService {
  private baseURL = "http://apiadvisor.climatempo.com.br/api/v1";
  private token = process.env.CLIMATEMPO_API_KEY;

  public async getWeather({ city, state }: GetWeatherParams) {
    const cityId = await this.getCityId({ city, state });

    const config: AxiosRequestConfig = {
      params: {
        token: this.token,
      },
    };

    const { data } = await axios.get(
      `${this.baseURL}/weather/locale/${cityId}/current`,
      config
    );

    return data;
  }

  private async getCityId({ city, state }: GetWeatherParams): Promise<string> {
    const config: AxiosRequestConfig = {
      params: {
        name: city,
        state,
        token: this.token,
      },
    };

    const { data } = await axios.get(`${this.baseURL}/locale/city`, config);
    const [foundCity] = data;

    return foundCity.id;
  }
}
