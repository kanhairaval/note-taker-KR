const notes = require("express").Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

notes.post("/", (req, res) => {
  res.json(req.body);
  if (req.body) {
    const newNote = {
      title,
      text,
  }

  readAndAppend(newTip, './db/tips.json');
    res.json(`Node added`);
  } else {
    res.error('Error in adding note');
}});

module.exports = notes;