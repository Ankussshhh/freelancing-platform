import express from 'express';
import { submitProposal, getJobProposals } from '../controllers/proposalController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, submitProposal);
router.get('/:jobId', authMiddleware, getJobProposals);

export default router;
