const express = require('express');

const PORT = process.env.PORT || 3001; // Port Designation
const app = express(); // *INSTANTIATE* express package

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
