import { Request, RequestHandler, Response } from 'express';
import * as ItemDao from './items.dao';  // Updated to use 'ItemDao' instead of 'ArtistDao'

export const readItems: RequestHandler = async (req: Request, res: Response) => {
  try {
    const items = await ItemDao.readItems();  // Use 'ItemDao' instead of 'ArtistDao'
    
    res.status(200).json(
        items
    );
  } catch (error) {
    console.error('[items.controller][ReadItems][Error]', error);
    res.status(500).json({
      message: 'There was an error when fetching items',
    });
  }
};
