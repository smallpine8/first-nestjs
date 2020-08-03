import { Controller, Post, Get, Body, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import {  UpdateUserDto } from './update-user.dto';
import { UserResponce } from './userResponce.interface';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponce> {
    const user = await this.userService.create(createUserDto);
    const res: UserResponce = {
      message: "ユーザーの作成に成功しました",
      responce: {
        user
      }
    };
    return res;
  }

  @Get()
  async find(): Promise<UserResponce> {
    const users = await this.userService.find();
    const res: UserResponce = {
      responce: {
        users
      }
    }
    return res;
  }

  @Get('/:id')
  async findOne(@Param() params): Promise<UserResponce> {
    const { id } = params;
    const user = await this.userService.findOne(id);
    const res: UserResponce = {
      responce: {
        user
      }
    }
    return res;
  }

  @Put('/:id')
  async update(@Param() params, @Body() updateUserDto: UpdateUserDto): Promise<UserResponce> {
    const { id } = params;
    const user = await this.userService.update(id, updateUserDto);
    const res: UserResponce = {
      message: "ユーザーの更新に成功しました",
      responce: {
        user
      },
    };
    return res;
  }

  @Delete('/id')
  async remove(@Param() params): Promise<UserResponce> {
    const { id } = params;
    await this.userService.remove(id);
    const res: UserResponce = {
      message: "ユーザーの削除に成功しました"
    }
    return res;
  }
}
