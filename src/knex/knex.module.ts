import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Knex from 'knex';

@Global()
@Module({
  providers: [
    {
      provide: 'KNEX_CONNECTION',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return Knex({
          client: 'pg',
          connection: {
            host: config.get<string>('DB_HOST'),
            port: config.get<number>('DB_PORT') || 5432,
            user: config.get<string>('DB_USERNAME'),
            password: config.get<string>('DB_PASSWORD'),
            database: config.get<string>('DB_DATABASE'),
          },
          pool: { min: 0, max: 10 },
        });
      },
    },
  ],
  exports: ['KNEX_CONNECTION'],
})
export class KnexModule {}