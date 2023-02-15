import express from 'express';
import healthcheck from './healthcheck.routes';
import {createUser, getUser, updateUser, deleteUser} from './users.routes';
import {createAthlete, getAthlete, updateAthlete, deleteAthlete} from './athletes.routes';
import {createQuote, getQuote, updateQuote, deleteQuote} from './quotes.routes';
import {checkAuth} from './auth.routes';

const router = express.Router();

router.get('/healthcheck', healthcheck);

// Users
router.post('/users/create', checkAuth, createUser);
router.get('/users/:uid', getUser);
router.post('/users/update', checkAuth, updateUser);
router.post('/users/delete', checkAuth, deleteUser);

// Athletes
router.post('/athletes/create', checkAuth, createAthlete);
router.get('/athletes/:username', getAthlete);
router.post('/athletes/update', checkAuth, updateAthlete);
router.post('/athletes/delete', checkAuth, deleteAthlete);

// Quotes
router.post('/quotes/create', checkAuth, createQuote);
router.get('/quotes/:uid', getQuote);
router.post('/quotes/update', checkAuth, updateQuote);
router.post('/quotes/delete', checkAuth, deleteQuote);

export default router;