import {
  ClassSerializerInterceptor,
  Controller,
  UseInterceptors,
} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { User } from './auth.entity';

@UseInterceptors(ClassSerializerInterceptor)
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.register')
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

  @MessagePattern('auth.findAll')
  async findAll(): Promise<User[]> {
    return this.authService.findAll();
  }

  @MessagePattern({ cmd: 'auth.getHello', v: 1 })
  getHello(): String {
    return this.authService.getHello();
  }

  @MessagePattern({ cmd: 'auth.getHello', v: 2 })
  getHello2(): String {
    return this.authService.getHello() + '2';
  }
}
