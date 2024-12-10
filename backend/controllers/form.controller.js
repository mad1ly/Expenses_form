import pool from "../db.js";

export const create = async (req, res, next) => {
  try {
    const { sum, category, comment, author, date } = req.body;

    const formattedDate = new Date(date)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    const [result] = await pool.execute(
      "INSERT INTO transactions (sum, category, comment, author, date) VALUES (?, ?, ?, ?, ?)",
      [sum, category, comment, author, formattedDate]
    );

    res.status(200).json({ message: "Success!", id: result.insertId });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getAll = async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM transactions');

    res.status(200).json({rows})
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
