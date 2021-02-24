const express = require("express");
const repoContext = require("./repository/repository-wrapper");
const { validateNewSong } = require("./middleware/validateSong");

// Initialize express
const app = express();

// Initialize Miiddleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

// REQUEST ALL SONGS IN DATABASE
app.get("/api/songs", (req, res) => {
  const songs = repoContext.songs.findAllSongs();
  res.send(songs);
});

// REQUEST SPECIFIIC SONG IN DATABASE
app.get("/api/songs/:id", (req, res) => {
  const id = req.params.id;
  const song = repoContext.songs.findSongById(id);
  res.send(song);
});

// ADD NEW SONGS TO DATABASE
app.post("/api/songs", [validateNewSong], (req, res) => {
  const songToAdd = req.body;
  const newSong = repoContext.songs.createSong(songToAdd);
  res.send(newSong);
});

// UPDATE SONGS IN LIBRARY
app.put("/api/songs/:id", [validateNewSong], (req, res) => {
  const id = req.params.id;
  const songDetailsToUpdate = req.body;
  const updatedSong = repoContext.songs.updateSong(id, songDetailsToUpdate);
  res.send(updatedSong);
});

// DELETE SONG(S) IN DATABASE
app.delete("/api/songs/:id", (req, res) => {
  const id = req.params.id;
  const songToDelete = req.body;
  const deletedSong = repoContext.songs.deleteSong(id, songToDelete);
  res.send(deletedSong);
});
