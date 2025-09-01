import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RabbitMQService {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersClient: ClientProxy,
    @Inject('FINANCES_SERVICE') private readonly financesClient: ClientProxy
  ) {}

  async sendUserEvent(pattern: string, data?: any) {
    return await firstValueFrom(this.usersClient.send(pattern, data));
  }
  async sendFinanceEvent(pattern: string, data?: any) {
    return await firstValueFrom(this.financesClient.send(pattern, data));
  }
}
