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
  async create(@Body() createUserDto: CreateUserDto): Promise<any>{
    return this.userService.create(createUserDto);
  }
}
