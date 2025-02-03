import { Request, RequestHandler, Response } from 'express';
import { Shorts } from './shorts.model';  // Update to use 'Shorts' instead of 'Albums'
import * as ShortsDao from './shorts.dao';  // Update to use 'ShortsDao' instead of 'AlbumDao'
import { OkPacket } from 'mysql';

export const readShorts: RequestHandler = async (req: Request, res: Response) => {
  try {
    let shorts;
    let shortId = parseInt(req.query.shortid as string);

    console.log("shortId", shortId);
    if (Number.isNaN(shortId)) {
      shorts = await ShortsDao.readShorts();
    } else {
      shorts = await ShortsDao.readShortsByShortId(shortId);
    }

    res.status(200).json(shorts);

  } catch (error) {
    console.error('[shorts.controller][readShorts][Error]', error);
    res.status(500).json({
      message: 'There was an error when fetching shorts'
    });
  }
};

export const readShortsByItem: RequestHandler = async (req: Request, res: Response) => {
    try {
      const shorts = await ShortsDao.readShortsByItem(req.params.item);  // Use 'item' instead of 'artist'
      res.status(200).json(shorts);
    } catch (error) {
      console.error('[shorts.controller][readShortsByItem][Error]', error);
      res.status(500).json({
        message: 'There was an error when fetching shorts',
      });
    }
};

export const readShortsByItemSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
      console.log('search', req.params.search);
      const shorts = await ShortsDao.readShortsByItemSearch('%' + req.params.search + '%');
      res.status(200).json(shorts);
    } catch (error) {
      console.error('[shorts.controller][readShortsByItemSearch][Error]', error);
      res.status(500).json({
        message: 'There was an error when fetching shorts',
      });
    }
};

export const readShortsByDescriptionSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
      console.log('search', req.params.search);
      const shorts = await ShortsDao.readShortsByDescriptionSearch('X' + req.params.search + 'X');
      res.status(200).json(shorts);
    } catch (error) {
      console.error('[shorts.controller][readShortsByDescriptionSearch][Error]', error);
      res.status(500).json({
        message: 'There was an error when fetching shorts',
      });
    }
};

export const createShort: RequestHandler = async (req: Request, res: Response) => {
    try {
      const okPacket: OkPacket = await ShortsDao.createShort(req.body);
      console.log('req.body', req.body);
      console.log('short', okPacket);
  
      res.status(200).json(okPacket);
    } catch (error) {
      console.error('[shorts.controller][createShort] [Error]', error);
      res.status(500).json({
        message: 'There was an error when writing shorts'
      });
    }
};



export const deleteShort: RequestHandler = async (req: Request, res: Response) => {
    try {
        let shortId = parseInt(req.params.id as string); // Update from shortId to id
        console.log('shortId', shortId);
        if (!Number.isNaN(shortId)) {
            const response = await ShortsDao.deleteShort(shortId);
            res.status(200).json(response);
        } else {
            throw new Error("Integer expected for id"); // Update error message
        }
    } catch (error) {
        console.error('[shorts.controller][deleteShort][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting shorts',
        });
    }
};

export const updateShortById: RequestHandler = async (req: Request, res: Response) => {
  try {
      const shortId = parseInt(req.params.id as string);
      if (!Number.isNaN(shortId)) {
          const updateResult = await ShortsDao.updateShortById(shortId, req.body);
          res.status(200).json(updateResult);
      } else {
          throw new Error("Integer expected for id");
      }
  } catch (error) {
      console.error('[shorts.controller][updateShortById][Error]', error);
      res.status(500).json({
          message: 'There was an error when updating shorts',
      });
  }
};
