import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotUpdate } from './bot.update';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bot } from './models/bot.model';
import { Address } from './models/address.model';

@Module({
  imports: [SequelizeModule.forFeature([Bot,Address])], // Fixed the syntax
  controllers: [],
  providers: [BotService, BotUpdate],
})
export class BotModule {}
