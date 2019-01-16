import express from 'express';

import RandomNumberGen from '../controller/index';

const router = express.Router();
const { generateNumber, getAllNumber } = RandomNumberGen;

router.post('/generate', generateNumber);
router.get('/generate', getAllNumber);

export default router;
