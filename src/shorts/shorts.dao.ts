import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Shorts } from './shorts.model';  // Updated import to use 'Shorts' instead of 'Short'
import { shortsQueries } from './shorts.queries';  // Updated import to use 'shortsQueries' instead of 'shortQueries'

export const readShorts = async () => {
  return execute<Shorts[]>(shortsQueries.readShorts, []);  // Updated to use 'Shorts' and 'shortsQueries'
};

export const readShortsByItem = async (itemName: string) => {
  return execute<Shorts[]>(shortsQueries.readShortsByItem, [itemName]);  // Updated to use 'Shorts' and 'shortsQueries'
};

export const readShortsByItemSearch = async (search: string) => {
  console.log('search param', search);
  return execute<Shorts[]>(shortsQueries.readShortsByItemSearch, [search]);  // Updated to use 'Shorts' and 'shortsQueries'
};

export const readShortsByDescriptionSearch = async (search: string) => {
  console.log('search param', search);
  return execute<Shorts[]>(shortsQueries.readShortsByDescriptionSearch, [search]);  // Updated to use 'Shorts' and 'shortsQueries'
};

export const readShortsByShortId = async (shortId: number) => {
  return execute<Shorts[]>(shortsQueries.readShortsByShortId, [shortId]);  // Updated to use 'Shorts' and 'shortsQueries'
};

export const createShort = async (short: Shorts) => {
  return execute<OkPacket>(shortsQueries.createShort, [
    short.name,
    short.item, // Updated to use 'item' instead of 'artist'
    short.description,
    short.size,
  ]);
};

export const updateShort = async (short: Shorts) => {
  return execute<OkPacket>(shortsQueries.updateShort, [
    short.name,
    short.item, // Updated to use 'item' instead of 'artist'
    short.description,
    short.size,
  ]);
};

export const deleteShort = async (shortId: number) => {
  return execute<OkPacket>(shortsQueries.deleteShort, [shortId]);
};
