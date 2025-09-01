import { Module } from '@nestjs/common';
import { AuthRepositoryService } from '@repositories/auth/auth.repository.service';

@Module({
    providers: [AuthRepositoryService],
    exports: [AuthRepositoryService],
})
export class AuthRepositoryModule {}
