import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JWT } from 'src/constants/jwt.constant';
import { UserController } from '@domains/user/user.controller';
import { UserService } from '@domains/user/user.service';
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
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
