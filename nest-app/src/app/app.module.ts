import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvUtils } from '../utils/env-utils';
import { AppDataSource } from '../configs/typeorm.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: EnvUtils.getEnvFilePath(),
        }),
        TypeOrmModule.forRootAsync(AppDataSource.options),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
