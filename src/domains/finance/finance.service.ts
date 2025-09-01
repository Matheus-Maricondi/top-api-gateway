import { Injectable } from '@nestjs/common';
import { RabbitMQService } from '@messaging/rabbitmq.service';

@Injectable()
export class FinanceService {
    constructor(
        private readonly rabbitMQService: RabbitMQService
    ) {}

    async findAll() {
        return await this.rabbitMQService.sendFinanceEvent('finances', {});
    }
    async create(finance: any): Promise<any> {
        return await this.rabbitMQService.sendFinanceEvent('finance_create', finance);
    }
    async update(finance: any): Promise<any> {
        return await this.rabbitMQService.sendFinanceEvent('finance_update', finance);
    }
    async delete(finance: any): Promise<any> {
        return await this.rabbitMQService.sendFinanceEvent('finance_delete', finance);
    }
}
