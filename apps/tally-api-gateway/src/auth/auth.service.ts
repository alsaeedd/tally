import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Alias } from 'typeorm/query-builder/Alias';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_CLIENT') private authClient: ClientProxy) {}

  findAll() {
    return this.authClient.send('auth.findAll', {});
  }

  register() {
    return this.authClient.send('auth.register', {
      email: 'explodymody@skool.com',
      password: 'daddio',
      companyName: 'raincode',
    });
  }
}
