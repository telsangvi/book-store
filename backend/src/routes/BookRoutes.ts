import { Router } from 'express';
import { getBooks } from '../controllers/BookController';

const router = Router();

router.get('/books', getBooks);

export default router;
