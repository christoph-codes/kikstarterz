import express from 'express';
import routes from './routes';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5555;

// Middleware (Body parser no longer needed)
app.use(express.json());

app.use('/api', routes);

app.get('*', (req, res) => {
	// res.sendFile(path.join(`${__dirname}/build/index.html`));
	// Catch all route that just throws a 404 error.
	res.status(404).send('This is not a valid url you are trying to reach');
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})