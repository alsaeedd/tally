import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { User } from './auth.entity';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'auth.register' })
  async register(data: {
    email: string;
    password: string;
    companyName: string;
  }): Promise<User> {
    return this.authService.createUser(
      data.email,
      data.password,
      data.companyName,
    );
  }

  @MessagePattern({ cmd: 'auth.findAllUsers' })
  async findAllUsers(): Promise<User[]> {
    return this.authService.findAllUsers();
  }

  getHello(): String {
    return this.authService.getHello();
  }
}
