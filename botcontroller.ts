// bot.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';

@Controller('bot')
export class BotController {
  constructor(private readonly bot: Telegraf<any>) {
    this.setupHandlers();
  }

  private setupHandlers() {
    this.bot.start((ctx) => ctx.reply('Welcome to the Weather Bot!'));
    
    this.bot.command('subscribe', async (ctx) => {
      // Implement subscription logic
      // You can store user data in a database or in-memory storage
      // Example: user = { id: ctx.from.id, username: ctx.from.username }
      ctx.reply('You are now subscribed for daily weather updates!');
    });

    // Add more handlers for other commands and functionalities

    this.bot.launch(); // Start the bot
  }
}
