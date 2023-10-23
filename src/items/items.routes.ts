import { Request, Response, Router } from "express";
import * as ItemsController from './items.controllers';
const router = Router();
router 
    .route('/items')
    .get(ItemsController.readItems);

export default router;
