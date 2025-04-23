import express from 'express';
import { register, login } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();


router.get('/me', authMiddleware, (req, res) => {
    res.json({ user: req.user });
  });
  

router.post('/register', register);
router.post('/login', login);

export default router;
