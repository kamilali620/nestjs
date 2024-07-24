import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  @ApiOperation({ summary: 'Signin user' })
  // @ApiBody({ description: 'Data to signin user', type: UserSignin })
  async signin() {
    return await this.usersService.getUsers();
  }

  @Post('create-users')
  async sugnup() {
    return await this.usersService.createUser();
  }
}
