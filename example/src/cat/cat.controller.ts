import { Controller, Get, Post, Req, Param, Body, ParseIntPipe, HttpStatus } from '@nestjs/common';
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
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number
  ): string {
    return this.catService.findOne(id);
  }
}