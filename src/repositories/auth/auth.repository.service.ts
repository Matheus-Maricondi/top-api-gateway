import { Injectable, Inject } from '@nestjs/common';
import { IAuthentication } from '@entities/auth.entity';
import { Knex } from 'knex';

@Injectable()
export class AuthRepositoryService {
    constructor(
        @Inject('KNEX_CONNECTION') private readonly knex: Knex
  ) {}

    async findByUser(username: string): Promise<IAuthentication | null> {
        const user: any = await this.knex<IAuthentication>('admins')
            .where({ username }) 
            .first();

        return user;
    }
}