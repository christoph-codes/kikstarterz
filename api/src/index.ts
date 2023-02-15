import express from 'express';
import routes from './routes';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5555;

app.use('/api', routes);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})