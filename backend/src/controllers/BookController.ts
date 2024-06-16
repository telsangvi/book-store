import { Request, Response } from 'express';
import { BookService } from '../services/BookService'
import {BookQueryValidator} from "../validators/BookQueryValidator";
import { validate } from 'class-validator';

const bookServiceObject = new BookService()

export const getBooks = async (req: Request, res: Response) => {
    const queryValidator = new BookQueryValidator();
    Object.assign(queryValidator, req.query);

    // Validate query parameters
    const errors = await validate(queryValidator);
    console.log(errors)
    if (errors.length > 0) {
      return res.status(400).send({ errors });
    }

 const response = await bookServiceObject.getBooks(req?.query)
 res.status(response.status).send(response)
};
