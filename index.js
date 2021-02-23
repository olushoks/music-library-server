const express = require("express");

// Initialize express
const app = express();

// Initialize PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

app.get("/", (req, res) => {
  res.send("<h1>Hello World, I am express</h1>");
});
