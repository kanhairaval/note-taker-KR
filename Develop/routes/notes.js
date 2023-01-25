const notes = require("express").Router();
const { readFromFile, readAndAppend } = require('../helper/fsUtils');
const uuid = require('../helper/uuid');

notes.post("/", (req, res) => {

  if (req.body) {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      note_id: uuid(),
  }

  readAndAppend(newNote, './db/db.json');
    res.json(newNote);
  } else {
    res.error('Error in adding note');
}});

// notes.get("/", (req, res) => {
//   readFromFile('./db/db.json')

//   .then((data) => res.json(JSON.parse(data)))
//   .catch((err) => res.json(err));
// });

// notes.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   readFromFile('./db/db.json')
//   .then((data) => JSON.parse(data))
//   .then((data) => data.filter((note) => note.id!== id))
//   .then((data) => res.json(data))
//   .catch((err) => res.json(err))
//   readAndAppend(id, './db/db.json');
//   res.json(id);
// });

// notes.put("/:id", (req, res) => {
//   const id = req.params.id;
//   const changes = req.body;
//   readFromFile('./db/db.json')
//   .then((data) => JSON.parse(data))
//   .then((data) => data.filter((note) => note.id!== id))
//   .then((data) => data.push(changes))

//  .then((data) => res.json(data))
//  .catch((err) => res.json(err));


//   readAndAppend(changes, './db/db.json');
//   res.json(changes);
// });

module.exports = notes;