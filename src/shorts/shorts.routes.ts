import { Router } from 'express';
import * as ShortsController from './shorts.controller'; 

const router = Router();

router
  .route('/shorts')
  .get(ShortsController.readShorts)
  .post(ShortsController.createShort);

router
  .route('/shorts/:item')  

router
  .route('/shorts/search/item/:search')  
  .get(ShortsController.readShortsByItemSearch);

router
  .route('/shorts/search/description/:search')  
  .get(ShortsController.readShortsByDescriptionSearch);

router
  .route('/shorts/:id')  
  .delete(ShortsController.deleteShort)
  .put(ShortsController.updateShortById);

export default router;