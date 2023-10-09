import express, { Express } from "express";
import { config } from "dotenv";
import { connect } from 'mongoose';
import AppRouter from "./routes";
import cors from 'cors';

config({
  path: ".env",
});

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use(AppRouter);

connect(process.env.MONGO_URL as string)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Servidor ejecutándose en http://localhost:${process.env.PORT}`)
    )
  )

