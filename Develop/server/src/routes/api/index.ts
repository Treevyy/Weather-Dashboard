import { Router } from 'express';
const router = Router();

import weatherRoutes from './weatherRoutes.js';

// This routes is '/api/weather'
router.use('/weather', weatherRoutes);

export default router;
