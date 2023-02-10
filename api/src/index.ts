import express from 'express';
import routes from './routes';

const app = express();
const port = 5555;

app.use('/api', routes);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})