const notes = require("express").Router();
const { readFromFile, readAndAppend, readAndDelete } = require('../helper/fsUtils');
const uuid = require('../helper/uuid');

notes.post("/", (req, res) => {

  if (req.body) {
    const newNote = {
      title: req.body.title,
      text: req.body.text, // explaination why req.body.text or title
      note_id: uuid(), // is this necessary
  }

  readAndAppend(newNote, './db/db.json');
    res.json(newNote);
  } else {
    res.error('Error in adding note');
}});

notes.get("/", (req, res) => {
  readFromFile('./db/db.json')

  .then((data) => res.json(JSON.parse(data))) // explaination what is the data arugument
  .catch((err) => res.json(err));
});

notes.delete("/:id", (req, res) => {
  readAndDelete(req.params.id, './db/db.json')
  .then((data) => res.json(JSON.parse(data)))
});

module.exports = notes;