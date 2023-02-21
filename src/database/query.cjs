const db = require("./db.pool.cjs");
const getConditionString = require("../utils/getConditionString.cjs");
const Errors = require("../utils/exceptions/index.cjs");

class Model {
  constructor(table) {
    this.table = table;
  }

  create = async (payload) => {
    const keys = Object.keys(payload).join(",");
    const values = Object.values(payload)
      .map((v) => {
        if (typeof v === "string") return `'${v}'`;
        return v;
      })
      .join(",");
    const queryStr = `INSERT INTO ${this.table} (${keys}) VALUES (${values}) RETURNING *`;
    const result = await db.query(queryStr);
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
    const result = await db.query(queryStr);
    return result.rows[0];
  };

  findOneAndUpdate = async (searchOptions, updatePayload) => {
    if (!searchOptions || !Object.keys(searchOptions).length) {
      throw new Errors.NotFound("user not found");
    }
    let queryStr = "";
    const searchStr = getConditionString(searchOptions);
    if (!updatePayload || !Object.keys(searchOptions).length) {
      queryStr = `SELECT * FROM ${this.table} WHERE ${searchStr} LIMIT 1`;
    } else {
      const updateStr = getConditionString(updatePayload);
      queryStr = `UPDATE ${this.table} SET ${updateStr} WHERE ${searchStr} RETURNING *`;
    }
    const result = await db.query(queryStr);
    return result.rows[0];
  };
}

module.exports = Model;
