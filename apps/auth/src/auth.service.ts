import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private authRepository: Repository<User>,
    private jwtService: JwtService,
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

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.authRepository.findOne({ where: { email } });
    if (!user) return null;

    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    return isValidPassword ? user : null;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async findAll(): Promise<User[]> {
    return this.authRepository.find();
  }

  async findById(id: string): Promise<User | null> {
    return this.authRepository.findOne({ where: { id } });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
