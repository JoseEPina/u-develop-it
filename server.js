const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const db = require('./db/connection');

const PORT = process.env.PORT || 3001; // Port Designation
const app = express(); // *INSTANTIATE* express package

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes, after Express middleware
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
   res.status(404).end();
});

// Start server after DataBase connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
