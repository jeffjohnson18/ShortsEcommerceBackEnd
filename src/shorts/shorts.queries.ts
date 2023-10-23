export const shortsQueries = {
    readShorts: `
      SELECT
        id as shortid, name AS title, size AS item,
        description AS description
      FROM brand.shorts
    `,
    readShortsByItem: `
      SELECT
        id as shortid, name AS title, size AS item,
        description AS description
      FROM brand.shorts
      WHERE brand.shorts.size = ?
    `,
    readShortsByItemSearch: `
      SELECT
        id as shortid, name AS title, size AS item,
        description AS description
      FROM brand.shorts
      WHERE brand.shorts.size LIKE ?
    `,
    readShortsByDescriptionSearch: `
      SELECT
        id as shortid, name AS title, size AS item,
        description AS description
      FROM brand.shorts
      WHERE brand.shorts.description LIKE ?
    `,
    readShortsByShortId: `
      SELECT
        id as shortid, name AS title, size AS item,
        description AS description
      FROM brand.shorts
      WHERE brand.shorts.id = ?
    `,
    createShort: `
      INSERT INTO brand.shorts(name, size, description)
      VALUES (?, ?, ?)
    `,
    updateShort: `
      UPDATE brand.shorts
      SET name = ?, size = ?, description = ?
      WHERE id = ?
    `,
    deleteShort: `
      DELETE FROM brand.shorts
      WHERE id = ?
    `,
  };
  