// bot.module.ts
import { Module } from '@nestjs/common';
import { TelegrafModule } from '@nestjs/platform-telegram';
import { BotController } from './bot.controller';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: 'YOUR_BOT_TOKEN', // Replace with your bot token
    }),
  ],
  controllers: [BotController],
  providers: [], // You can add providers (services) here for more complex functionality
})
export class BotModule {}
