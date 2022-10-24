const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

//add notes
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNOTES(notes);
    console.log("New notes added:");
  } else {
    console.log("note title taken");
  }
};


// remove the node
const removeNote = function (title) {
  // console.log(title);
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNOTES(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
  // saveNOTES(notesToKeep);
};

const saveNOTES = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  // JAVASCRIPT TRY AND CATCH CODE BLOCK

  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
