import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '@libs/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@libs/strategy/jwt.strategy';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({ secret: 'test', signOptions: { expiresIn: '1h' } }),
  ],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
})
export class UsersModule {}
