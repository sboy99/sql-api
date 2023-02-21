const db = require("./db.pool.cjs");
const getConditionString = require("../utils/getConditionString.cjs");

class Model {
  constructor(table) {
    this.table = table;
  }

  create = async (payload) => {
    const keys = Object.keys(payload).join(",");
    const values = Object.values(payload).join(",");

    const result = await db.query(
      `INSERT INTO ${this.table} (${keys}) VALUES (${values}) RETURNING *`
    );
    return result.rows[0];
  };

  find = async (payload) => {
    let queryStr = "";
    if (!payload || !Object.keys(payload).length)
      queryStr = `SELECT * FROM ${this.table}`;
    else {
      const conditionString = getConditionString(payload);
      queryStr = `SELECT * FROM ${this.table} WHERE ${conditionString}`;
    }
    const result = await db.query(queryStr);
    return result.rows;
  };

  findOne = async (payload) => {
    let queryStr = "";
    if (!payload || !Object.keys(payload).length)
      queryStr = `SELECT * FROM ${this.table} LIMIT 1`;
    else {
      const conditionString = getConditionString(payload);
      queryStr = `SELECT * FROM ${this.table} WHERE ${conditionString} LIMIT 1`;
    }
    console.log(queryStr);

    const result = await db.query(queryStr);
    return result.rows[0];
  };
}

module.exports = Model;
