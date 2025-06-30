import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './auth.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private authRepository: Repository<User>,
  ) {}

  async createUser(
    email: string,
    password: string,
    companyName: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.authRepository.create({
      email,
      password_hash: hashedPassword,
      company_name: companyName,
    });
    return this.authRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.authRepository.find();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
