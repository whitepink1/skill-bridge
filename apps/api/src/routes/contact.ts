import express from 'express';
import * as contactController from '../controllers/contact';

const router = express.Router();

router.post('/message', contactController.contactMessage);

export default router;