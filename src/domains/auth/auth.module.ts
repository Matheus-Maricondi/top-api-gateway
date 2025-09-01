import { Module } from '@nestjs/common';
import { JWT } from 'src/constants/jwt.constant';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '@domains/auth/auth.controller';
import { AuthService } from '@domains/auth/auth.service';
import { AuthRepositoryModule } from '@repositories/auth/auth.repository.module';

@Module({
  imports: [
    AuthRepositoryModule,
    JwtModule.register({
      global: true,
      secret: JWT.SECRET,
      signOptions: { expiresIn: JWT.EXPIRES }
    })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
