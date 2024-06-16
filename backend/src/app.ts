import express, {NextFunction} from 'express';
import 'reflect-metadata';
import cors from 'cors';
import bookRoutes from './routes/BookRoutes';
import {appDataSource} from "./data-source";

const app = express();

appDataSource
  .initialize()
  .then(() => {
    console.info('Data Source is now initialized.!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })

app.use(cors());
app.use(express.json());
app.use('/api', bookRoutes);

export { app };
