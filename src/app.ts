import dotenv from "dotenv";
import express, { Request, Response } from 'express';
import shortsRouter from './shorts/shorts.routes';
import itemsRouter from './items/items.routes';

dotenv.config();
console.log('')
const app = express();
const cors = require('cors');
const port = process.env.PORT;
app.use(express.json()); 
app.use(cors());
app.use('/', [itemsRouter, shortsRouter]);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});