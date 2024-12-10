import pool from "./db.js";

const createTable = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS transactions (
      id INT AUTO_INCREMENT PRIMARY KEY,
        date TIMESTAMP NOT NULL,
        author VARCHAR(255),
        sum INT NOT NULL,
        category VARCHAR(255) NOT NULL,
        comment TEXT
    );
  `;

  try {
    await pool.execute(createTableQuery);
    console.log('Table created successfully.');
  } catch (error) {
    console.error("Error creating table:", error.message);
  } finally {
    process.exit();
  }
};

createTable();
