import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface'

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): string {
    return `${id}匹めのニャー`;
  }
}
