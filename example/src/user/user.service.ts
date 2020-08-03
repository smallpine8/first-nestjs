import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async find(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.save(userDto);
    return user;
  }

  async update(id: string, userDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, userDto);
    const user = await this.userRepository.findOne(id);
    return user;
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.softDelete(id);
  }
}
