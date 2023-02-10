import express from 'express';
import healthcheck from './healthcheck.routes';
import {createUser, getUser, updateUser, deleteUser} from './users.routes';
import {createAthlete, getAthlete, updateAthlete, deleteAthlete} from './athletes.routes';
import {createQuote, getQuote, updateQuote, deleteQuote} from './quotes.routes';

const router = express.Router();

router.get('/healthcheck', healthcheck);

// Users
router.post('/users/create', createUser);
router.post('/users/get', getUser);
router.post('/users/update', updateUser);
router.post('/users/delete', deleteUser);

// Athletes
router.post('/athletes/create', createAthlete);
router.post('/athletes/get', getAthlete);
router.post('/athletes/update', updateAthlete);
router.post('/athletes/delete', deleteAthlete);

// Quotes
router.post('/quotes/create', createQuote);
router.post('/quotes/get', getQuote);
router.post('/quotes/update', updateQuote);
router.post('/quotes/delete', deleteQuote);

export default router;