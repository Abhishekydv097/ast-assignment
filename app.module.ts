import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BotModule } from './bot/bot.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [BotModule, AdminModule],
  controllers: [AppController],
})
export class AppModule {}
