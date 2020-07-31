import { Controller, Post, Get, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<Object> {
    const user = await this.userService.create(createUserDto);
    console.log(user);
    const res = {
      message: "ユーザーの作成に成功しました",
      responce: user,
    };

    return res;
  }
}
