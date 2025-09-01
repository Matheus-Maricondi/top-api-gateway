import { Injectable } from '@nestjs/common';
import { RabbitMQService } from '@messaging/rabbitmq.service';

@Injectable()
export class UserService {
    constructor(
        private readonly rabbitMQService: RabbitMQService
    ) {}

    async findAll() {
        return await this.rabbitMQService.sendUserEvent('users', {});
    }
    async create(user: any): Promise<any> {
        return await this.rabbitMQService.sendUserEvent('user_create', user);
    }
    async update(user: any): Promise<any> {
        return await this.rabbitMQService.sendUserEvent('user_update', user);
    }
    async delete(user: any): Promise<any> {
        return await this.rabbitMQService.sendUserEvent('user_delete', user);
    }
}
