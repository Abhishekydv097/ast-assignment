import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  private readonly apiKey: string = '86f243487msh35edd4d868d7e1p14abcejsn1e997851ea7';

  async getWeather(location: string): Promise<string> {
    try {
      const apiUrl = `API_URL?location=${location}&apiKey=${this.apiKey}`;
      
      const response = await axios.get(apiUrl);

      const weatherInfo = response.data;

      return `The weather in ${location} is ${weatherInfo.description} with a temperature of ${weatherInfo.temperature}°C.`;
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      throw new Error('Failed to fetch weather information.');
    }
  }
}
