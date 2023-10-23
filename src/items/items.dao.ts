import { execute } from '../services/mysql.connector';
import { Items } from './items.model';  // Update import to use 'Item' instead of 'Artist'
import { itemQueries } from './items.queries';  // Update import to use 'itemQueries' instead of 'artistQueries'

export const readItems = async () => {
  return execute<Items[]>(itemQueries.readItems, []);  // Use 'Item' and 'itemQueries' instead of 'Artist' and 'artistQueries'
};
