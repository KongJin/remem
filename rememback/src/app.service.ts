import { Injectable } from '@nestjs/common';
import { client } from './main';
import { Book } from '@prisma/client';

@Injectable()
export class AppService {
  async getBook(): Promise<Book[]> {
    try {
      const books = await client.book.findMany();
      return books;
    } catch {}
  }
  async postBook(): Promise<string> {
    try {
      await client.book.create({
        data: {
          title: 'gg',
          year: 1996,
        },
      });
    } catch {}
    return 'Hello World!';
  }
}
