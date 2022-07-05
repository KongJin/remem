import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

import { Book } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('book')
  getHello(): Promise<Book[]> {
    return this.appService.getBook();
  }

  @Post('book')
  postHello(): Promise<string> {
    return this.appService.postBook();
  }
}
