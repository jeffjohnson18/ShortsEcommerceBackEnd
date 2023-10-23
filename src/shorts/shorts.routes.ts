import { Router } from 'express';
import * as ShortsController from './shorts.controller';  // Update to use 'ShortsController' instead of 'AlbumsController'

const router = Router();

// Route for creating shorts using the POST method
router
  .route('/shorts')
  .get(ShortsController.readShorts)
  .post(ShortsController.createShort);

router
  .route('/shorts/:item')  // Update the route to use '/shorts' instead of '/albums' and ':item' instead of ':artists'
  .get(ShortsController.readShortsByItem);

router
  .route('/shorts/search/item/:search')  // Update the route to use '/shorts' instead of '/albums' and 'item' instead of 'artists'
  .get(ShortsController.readShortsByItemSearch);

router
  .route('/shorts/search/description/:search')  // Update the route to use '/shorts' instead of '/albums'
  .get(ShortsController.readShortsByDescriptionSearch);

router
  .route('/shorts/:id')  // Update the route to use '/shorts' instead of '/albums' and ':shortId' instead of ':albumId'
  .delete(ShortsController.deleteShort);

router
  .route('/shorts')
  .put(ShortsController.updateShort);


export default router;
