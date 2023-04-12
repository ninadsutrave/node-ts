import express from 'express';
import { Request, Response, NextFunction } from 'express';
import connect from './config/dbconnect';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

//connect to database
connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/test', (req: Request, res: Response) => {
    res.send({"message": "Hey!"})
})

app.listen(PORT, () => {
    console.log("Server is up on Port ", PORT)
})