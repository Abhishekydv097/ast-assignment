// bot.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';
import { WeatherService } from './weather.service';

@Controller('bot')
export class BotController {
  constructor(
    private readonly bot: Telegraf<any>,
    private readonly weatherService: WeatherService,
  ) {
    this.setupHandlers();
  }

  private setupHandlers() {
    this.bot.start((ctx) => ctx.reply('Welcome to the Weather Bot!'));

    this.bot.command('subscribe', async (ctx) => {
  
      ctx.reply('You are now subscribed for daily weather updates!');
    });

    this.bot.command('weather', async (ctx) => {
      const location = ctx.message.text.split(' ')[1]; // Extract location from the command
      if (!location) {
        return ctx.reply('Please provide a location. Example: /weather New York');
      }

      try {
        const weatherInfo = await this.weatherService.getWeather(location);
        ctx.reply(weatherInfo);
      } catch (error) {
        ctx.reply('Failed to fetch weather information. Please try again later.');
      }
    });

   

    this.bot.launch();
  }
}
