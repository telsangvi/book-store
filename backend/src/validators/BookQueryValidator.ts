import { IsOptional, IsString, IsDateString, IsIn } from 'class-validator';

export class BookQueryValidator {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsDateString()
  publishedStartDate?: string;

  @IsOptional()
  @IsDateString()
  publishedEndDate?: string;

  @IsOptional()
  @IsString()
  @IsIn(['Novel', 'Southern Gothic', 'Dystopian', 'Romantic Fiction', 'Realistic Fiction', 'Adventure', 'Historical Fiction', 'Fantasy', 'Science Fiction', 'Modernist Novel'])
  genre?: string;
}
