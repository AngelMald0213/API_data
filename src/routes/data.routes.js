import { Router } from "express";
import { getAll, insertData } from '../controllers/data.controller.js';

const router = Router();

router.get('/', getAll);
router.post('/', insertData);


export default router;
