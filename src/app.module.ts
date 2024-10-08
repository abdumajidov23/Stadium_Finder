import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { SequelizeModule } from "@nestjs/sequelize";
import { ComfortModule } from './comfort/comfort.module';
import { join } from "node:path";
import { Comfort } from './comfort/models/comfort.model';
import { DistrictModule } from './district/district.module';
import { RegionModule } from './region/region.module';
import { District } from './district/models/district.model';
import { Region } from './region/models/region.model';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/models/category.model';
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
import { MailModule } from './mail/mail.module';
import { UserCardsModule } from './user_cards/user_cards.module';
import { UserCard } from './user_cards/models/user_card.model';
import { UserWalletModule } from './user_wallet/user_wallet.module';
import { UserWallet } from './user_wallet/models/user_wallet.model';
import { BotModule } from './bot/bot.module';
import { TelegrafModule } from 'nestjs-telegraf';
import { BOT_NAME, BOT_NAME_2 } from './app.constants';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/models/admin.model';

@Module({
  imports: [


    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN,
        include: [BotModule],
        middlewares: [],
        
      }),
    }),
    // TelegrafModule.forRootAsync({
    //   useFactory: () => ({
    //     token: process.env.BOT_TOKEN_2,
    //   })
    // }),


    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Comfort,
        District,
        Region,
        Category,
        User,
        UserCard,
        UserWallet,
        Admin,
        
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    ComfortModule,
    DistrictModule,
    RegionModule,
    CategoriesModule,
    UsersModule,
    MailModule,
    UserCardsModule,
    UserWalletModule,
    BotModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
