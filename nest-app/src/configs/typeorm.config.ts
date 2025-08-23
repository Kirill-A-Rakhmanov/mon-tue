import { EnvUtils } from '../utils/env-utils';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    // entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
    // migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
    entities: [path.join(__dirname, '../**/*.entity.{ts,js}')],
    migrations: [path.join(__dirname, '../migrations/*.{ts,js}')],
    synchronize: !EnvUtils.isProd(),
};

export const AppDataSource = new DataSource(dataSourceOptions);
