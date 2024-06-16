# Books Store Backend

This project is a backend application for managing books using TypeScript, Express.js, TypeORM, and Jest for testing. It provides REST APIs to retrieve and manage books based on various criteria.

## Features

- Retrieve books based on title, author, published date range, genre, sorting, and pagination.
- Add new books (not implemented in this example).
- Update book details (not implemented in this example).
- Delete books (not implemented in this example).

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **TypeScript**: Typed superset of JavaScript.
- **Express.js**: Web framework for Node.js.
- **TypeORM**: ORM (Object-Relational Mapping) library for TypeScript and JavaScript.
- **Jest**: Testing framework for JavaScript and TypeScript.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v14.x or later)
- npm (v6.x or later)
- MySQL (or any other supported database by TypeORM)
- Docker (optional, for running MySQL in a Docker container)

## Getting Started

### 1. Clone the Repository

```
git clone <repository-url>
cd books-store/backend

# Install dependencies
npm install

# Start containers
docker-compose up -d

# Start the backend server in development mode
npm run dev

# Run tests using Jest
npm test
```

# Books Store Backend API Documentation

## Retrieve Books
### GET http://localhost:3000/api/books
### GET http://localhost:3000/api/books?title=Harry
### GET http://localhost:3000/api/books?author=Rowling
### GET http://localhost:3000/api/books?startDate=2000-01-01&endDate=2020-12-31
### GET http://localhost:3000/api/books?genre=Fantasy
### GET http://localhost:3000/api/books?sort=title
### GET http://localhost:3000/api/books?page=2&size=5


Retrieve a list of books based on optional query parameters.

#### Query Parameters

- `title`: Partial or full title of the book.
- `author`: Partial or full name of the author.
- `startDate`/`endDate`: Published date range of the books.
- `genre`: Genre of the books.
- `sort`: Field to sort by (`title`, `author`, `publishedDate`).
- `sortOrder`: Sort order (`ASC` or `DESC`).
- `page`: Page number for pagination (default: 1).
- `size`: Number of items per page (default: 10).

#### Example


#### Response

```json
{
  "status": 200,
  "isSuccess": true,
  "payload": [
    {
      "id": 1,
      "title": "Harry Potter and the Philosopher's Stone",
      "author": "J.K. Rowling",
      "publishedDate": "1997-06-26",
      "genre": "Fantasy"
    },
    {
      "id": 2,
      "title": "Harry Potter and the Chamber of Secrets",
      "author": "J.K. Rowling",
      "publishedDate": "1998-07-02",
      "genre": "Fantasy"
    }
  ],
  "count": 2
}
```

# Books Store Frontend

This project is a frontend application built with React.js to consume the Books Store Backend APIs. It allows users to search, sort, and filter books retrieved from the backend server.

## Features

- Display a list of books retrieved from the backend server.
- Search books by title or author.
- Filter books by genre.
- Sort books by title, author, or published date.
- Paginate through the list of books.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Redux Toolkit**: State management library for React applications.
- **Axios**: Promise-based HTTP client for making API requests.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v14.x or later)
- npm (v6.x or later)
- Access to the Books Store Backend API (ensure it's running and accessible)

## Getting Started

### 1. Clone the Repository

```bash
git clone <frontend-repository-url>
cd books-store/frontend
```
