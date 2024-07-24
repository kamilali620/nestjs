import { PrismaService } from '@libs/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async getUsers() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async createUser() {
    const user = await this.prisma.user.create({
      data: {
        username: 'test user',
        email: 'test_user@example.com',
        password: 'test',
      },
    });
    return user;
  }
}
