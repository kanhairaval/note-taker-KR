const notes = require("express").Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

notes.post("/", (req, res) => {
  res.json(req.body);
  if (req.body) {
    const newNote = {
      title,
      text,
  }

  readAndAppend(newNote, './db/db.json');
    res.json(`Note added`);
  } else {
    res.error('Error in adding note');
}});

module.exports = notes;