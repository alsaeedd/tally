import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('findAll')
  findAll() {
    return this.authService.findAll();
  }

  @Post('create')
  create() {
    return this.authService.create();
  }
}
