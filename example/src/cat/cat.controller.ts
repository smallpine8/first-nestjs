import { Controller, Get, Post, Req, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { CatService } from './cat.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService){}
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto)
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'ニャー';
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `${params.id}匹目のニャー`;
  }
}