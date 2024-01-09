import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BotModule } from './bot/bot.module';
import { AdminModule } from './admin/admin.module';
import * as dotenv from 'dotenv';
@Module({
  imports: [BotModule, AdminModule],
  controllers: [AppController],
})
export class AppModule {}
async function bootstrap() {
    dotenv.config();
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  }
  bootstrap();
