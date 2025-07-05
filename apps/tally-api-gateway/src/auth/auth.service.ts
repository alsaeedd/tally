import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_CLIENT') private authClient: ClientProxy) {}

  findAll() {
    return this.authClient.send('auth.findAll', {});
  }

  signup(email: string, password: string, company_name: string) {
    return this.authClient.send('auth.signup', {
      email,
      password,
      company_name,
    });
  }

  login(email: string, password: string) {
    return this.authClient.send('auth.login', {
      email,
      password,
    });
  }
}
