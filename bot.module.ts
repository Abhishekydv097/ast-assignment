// bot.module.ts
import { Module } from '@nestjs/common';
import { TelegrafModule } from '@nestjs/platform-telegram';
import { BotController } from './bot.controller';
import { WeatherService } from './weather.service';
import { UserService } from './user.service';
import { DatabaseService } from './database.service'; 

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN || 'your_default_fake_bot_token',
    }),
  ],
  controllers: [BotController],
  providers: [WeatherService, UserService, DatabaseService], 
})
export class BotModule {}
