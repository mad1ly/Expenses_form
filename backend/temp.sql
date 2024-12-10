CREATE DATABASE expenses_form;
USE expenses_form;

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date TIMESTAMP NOT NULL,
    author VARCHAR(255),
    sum INT NOT NULL,
    category VARCHAR(255) NOT NULL,
    comment TEXT
  );
  

installation

Client
cd ./client
npm install
npm run build

Backend 
put your mysql credentials in /backend/db.js
npm install
cd ./backend
node createDB.js
cd ..
npm run dev