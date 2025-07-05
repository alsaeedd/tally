import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  UseInterceptors,
} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { User } from './entities/auth.entity';
import { LoginDto } from './dtos/login.dto';
import { SignupDto } from './dtos/signup.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.login')
  async login(data: LoginDto) {
    return this.authService.login(data.email, data.password);
  }

  @MessagePattern('auth.signup')
  async signup(data: SignupDto) {
    return this.authService.createUser(
      data.email,
      data.password,
      data.company_name,
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
