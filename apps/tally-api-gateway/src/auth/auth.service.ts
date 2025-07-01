import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_CLIENT') private authClient: ClientProxy) {}

  findAll() {
    return this.authClient.send('auth.findAll', {});
  }

  create() {
    return this.authClient.send('auth.create', {
      email: 'explodymody@skool.com',
      password: 'daddio',
      companyName: 'raincode',
    });
  }
}
