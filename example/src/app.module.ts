import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';

import { LoggerMiddleware } from './middlewares/logger.middleware';
const config = dotenv.parse(fs.readFileSync('./.env'));
const entities = { entities: [] }
const mergedConfig = Object.assign({}, config, entities);
@Module({
  imports: [
    TypeOrmModule.forRoot(mergedConfig),
    CatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private connection: Connection) {}
  configure(consumer: MiddlewareConsumer)
  {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('cat');
  }
}
