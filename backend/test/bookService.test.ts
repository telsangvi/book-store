import { Request, Response } from 'express';
import { BookService } from '../src/services/BookService';
import { Repository, createConnection } from 'typeorm';
import { Book } from '../src/entities/Book';
import { appDataSource } from '../src/data-source';

// Mock data source and repository
const mockRepository: Partial<Repository<Book>> = {
  createQueryBuilder: jest.fn().mockReturnThis(),
  andWhere: jest.fn().mockReturnThis(),
  orderBy: jest.fn().mockReturnThis(),
  skip: jest.fn().mockReturnThis(),
  take: jest.fn().mockReturnThis(),
  getManyAndCount: jest.fn().mockResolvedValue([[], 0]), // Adjusted to mock a promise (use jest.fn().mockReturnValue for sync)
} as Partial<Repository<Book>>; // Type assertion to tell TypeScript that these methods exist on Partial<Repository<Book>>


// Mock createConnection to return the mockRepository
jest.mock('../data-source', () => ({
  __esModule: true,
  appDataSource: {
    getRepository: jest.fn().mockReturnValue(mockRepository as Repository<Book>),
  },
}));

describe('BookService', () => {
  let bookService: BookService;

  beforeAll(() => {
    // Initialize BookService with mocked dependencies
    bookService = new BookService(mockRepository as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should retrieve books with default parameters', async () => {
    const queryParams = {};
    const result = await bookService.getBooks(queryParams);

    expect(appDataSource.getRepository).toHaveBeenCalled();
    expect(mockRepository.createQueryBuilder).toHaveBeenCalled();
    expect(mockRepository.getManyAndCount).toHaveBeenCalled();
    expect(result.status).toBe(200);
    expect(result.isSuccess).toBe(true);
    expect(result.payload).toEqual([]);
    expect(result.count).toBe(0);
  });

  it('should filter books by title', async () => {
    const queryParams = { title: 'Harry' };
    const result = await bookService.getBooks(queryParams);

    expect(appDataSource.getRepository).toHaveBeenCalled();
    expect(mockRepository.createQueryBuilder).toHaveBeenCalled();
    expect(mockRepository.andWhere).toHaveBeenCalledWith(
      'book.title LIKE :title',
      { title: '%Harry%' }
    );
    expect(mockRepository.getManyAndCount).toHaveBeenCalled();
    expect(result.status).toBe(200);
    expect(result.isSuccess).toBe(true);
    expect(result.payload).toEqual([]);
    expect(result.count).toBe(0);
  });

  // Add more test cases for other query parameters (author, startDate, endDate, genre, sort, sortOrder, pagination, etc.)
});