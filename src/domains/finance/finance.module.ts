import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JWT } from 'src/constants/jwt.constant';
import { FinanceController } from '@domains/finance/finance.controller';
import { FinanceService } from '@domains/finance/finance.service';
import { RabbitMQModule } from '@messaging/rabbitmq.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: JWT.SECRET,
      signOptions: { expiresIn: JWT.EXPIRES }
    }),
    RabbitMQModule
  ],
  controllers: [FinanceController],
  providers: [FinanceService]
})
export class FinanceModule {}
