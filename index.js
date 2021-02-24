const express = require("express");
const repoContext = require("./repository/repository-wrapper");

// Initialize express
const app = express();

// Initialize Miiddleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

app.get("/", (req, res) => {
  res.send("<h1>Hello World, I am express</h1>");
});

app.post("/api/songs", (req, res) => {
  const songToAdd = req.body;
  const newSong = repoContext.songs.createSong(songToAdd);
  res.send(newSong);
});
