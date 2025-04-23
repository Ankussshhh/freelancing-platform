import express from 'express';
import { createOrUpdateProfile, getProfile } from '../controllers/profileController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createOrUpdateProfile);
router.get('/:userId', getProfile);

export default router;
