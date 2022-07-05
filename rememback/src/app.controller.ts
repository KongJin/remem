import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

import { Book } from '@prisma/client';

@Controller('book')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Book[]> {
    return this.appService.getBook();
  }

  @Post()
  postHello(@Req() req: Request): Promise<Book> {
    let { title } = req.body;
    console.log(req.body);
    return this.appService.postBook(title);
  }
}
