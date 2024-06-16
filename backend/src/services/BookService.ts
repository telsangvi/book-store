import { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Book } from '../entities/Book';
import {appDataSource} from "../data-source";

export class BookService{
    private bookRepository : Repository<Book>
    
    constructor(){
    this.bookRepository = appDataSource.getRepository(Book)
    }
    
    async getBooks(queryParams: any):Promise<any>{
        const { title, author, startDate, endDate, genre, sort, sortOrder, page = 1, size = 10 } = queryParams;

        const query = this.bookRepository.createQueryBuilder('book');
      
        if (title) {
          query.andWhere('book.title LIKE :title', { title: `%${title}%` });
        }
      
        if (author) {
          query.andWhere('book.author LIKE :author', { author: `%${author}%` });
        }
      
        if (startDate && endDate) {
          query.andWhere('book.publishedDate BETWEEN :startDate AND :endDate', { startDate, endDate });
        }
      
        if (genre) {
          query.andWhere('book.genre = :genre', { genre });
        }
      
        if (sort) {
            const _sortOrder = sortOrder || 'ASC'
          query.orderBy(`book.${sort}`, _sortOrder);
        }
      
        const [books, count] = await query
          .skip((page - 1) * size)
          .take(size)
          .getManyAndCount();
      
        return {
            status: 200,
            isSuccess: true,
            payload: books,
            count
        };
    }
}
