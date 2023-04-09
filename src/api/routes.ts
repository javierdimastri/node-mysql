import { Router } from 'express';
import TeamsRoutes from './routes/TeamRoute';

const router = Router();

router.use('/teams', TeamsRoutes);

export default router;
