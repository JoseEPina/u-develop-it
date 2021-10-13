const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001; // Port Designation
const app = express(); // *INSTANTIATE* express package

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to the database
const db = mysql.createConnection(
   {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'BC-JoseEPina',
      database: 'election',
   },
   console.log('Connected to the election database.')
);

// // GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//    if (err) {
//       console.log(err);
//    }
//    console.log(row);
// });

// // DELETE a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//    if (err) {
//       console.log(err);
//    }
//    console.log(result);
// });

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//    console.log(rows); // console.log our array of Objects, reprenting the rows in the 'candidates' database.
// });
// // GET : to test connection to server and response.
// app.get('/', (req, res) => {
//    res.json({ message: 'Hello World!' }); // response method to send the response message back to the client.
// });

// // Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//    res.status(404).end();
// });

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
