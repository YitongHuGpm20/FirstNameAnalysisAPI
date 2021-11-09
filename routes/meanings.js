import express from 'express';
import { getAllMeanings, addMeaning, searchMeaning, deleteMeaning, updateMeaning } from '../controllers/meanings.js';

const router = express.Router();

router.get('/', getAllMeanings);

router.post('/mn', addMeaning);

router.get('/mn', searchMeaning);

router.delete('/mn', deleteMeaning);

router.patch('/mn', updateMeaning);

export default router;

