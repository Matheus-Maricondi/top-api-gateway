import { Module } from '@nestjs/common';
import { AuthModule } from '@domains/auth/auth.module'
import { UserModule } from '@domains/user/user.module';
import { FinanceModule } from '@domains/finance/finance.module';
import { KnexModule } from './knex/knex.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule,
    AuthModule,
    UserModule,
    FinanceModule
  ],
})
export class AppModule {}
