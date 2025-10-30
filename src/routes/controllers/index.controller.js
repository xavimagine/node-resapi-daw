import { pool } from "../../db.js";

export const Ping = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM departamentos");
  res.json(result);
};
