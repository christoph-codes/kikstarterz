import express from 'express';
import healthcheck from './healthcheck.routes';
import {createUser, getUser, updateUser, deleteUser} from './users.routes';

const router = express.Router();

router.get('/healthcheck', healthcheck);

// Users
router.post('/users/create', createUser);
router.post('/users/get', getUser);
router.post('/users/update', updateUser);
router.post('/users/delete', deleteUser);

export default router;