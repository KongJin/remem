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
  async postBook(title: string): Promise<Book> {
    try {
      const book = await client.book.create({
        data: {
          title,
          year: 1996,
        },
      });
      return book;
    } catch {}
  }
}
