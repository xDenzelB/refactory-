const orders = require('../controllers/orders');
const pool = require('../utils/pool');

module.exports = class Order {
  id;
  product;
  quantity;

  constructor(row) {
    this.id = row.id;
    this.product = row.product;
    this.quantity = row.quantity;
  }

  static async insert({ product, quantity }) {
    const { rows } = await pool.query(
      `INSERT INTO 
      orders(product, quantity) 
      VALUES ($1, $2) 
      RETURNING 
      *
      `,
      [product, quantity]
    // TODO: Implement me
    );
    return new Order(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT 
      *
      FROM 
      orders
      `
    );

    return new Order(rows[0]);
    // TODO: Implement me
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT 
    *
    FROM 
    orders
    WHERE 
    id=$1
    `,
      [id]

    );

    return new Order(rows[0]);
    // TODO: Implement me
  }

  static async updateById(id, { product, quantity }) {
    // TODO: Implement me
  }

  static async deleteById(id) {
    // TODO: Implement me
  }
};
