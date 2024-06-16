import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertSampleData1718530928866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO books (title, author, publishedDate, genre) VALUES
            ('The Great Gatsby', 'F. Scott Fitzgerald', '1925-04-10', 'Novel'),
            ('To Kill a Mockingbird', 'Harper Lee', '1960-07-11', 'Southern Gothic'),
            ('1984', 'George Orwell', '1949-06-08', 'Dystopian'),
            ('Pride and Prejudice', 'Jane Austen', '1813-01-28', 'Romantic Fiction'),
            ('The Catcher in the Rye', 'J.D. Salinger', '1951-07-16', 'Realistic Fiction'),
            ('Moby-Dick', 'Herman Melville', '1851-10-18', 'Adventure'),
            ('War and Peace', 'Leo Tolstoy', '1869-01-01', 'Historical Fiction'),
            ('The Hobbit', 'J.R.R. Tolkien', '1937-09-21', 'Fantasy'),
            ('Brave New World', 'Aldous Huxley', '1932-08-31', 'Science Fiction'),
            ('Ulysses', 'James Joyce', '1922-02-02', 'Modernist Novel');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM books WHERE title IN (
                'The Great Gatsby', 
                'To Kill a Mockingbird', 
                '1984', 
                'Pride and Prejudice', 
                'The Catcher in the Rye', 
                'Moby-Dick', 
                'War and Peace', 
                'The Hobbit', 
                'Brave New World', 
                'Ulysses'
            );
        `);
    }

}
