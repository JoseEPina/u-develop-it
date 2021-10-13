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

db.query(`SELECT * FROM candidates`, (err, rows) => {
   console.log(rows);
});
// // GET : to test connection to server and response.
// app.get('/', (req, res) => {
//    res.json({ message: 'Hello World!' }); // response method to send the response message back to the client.
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
   res.status(404).end();
});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
