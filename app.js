const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//
// challange: setuip command option and function
//

//1. Setup the remove command to take a required "--title" option
//2. create and export a removeNote function from notes.js
//3. Call removeNote in remove command handler
//4. have removeNote log the title of the note to be removed
//5. Test your using: node app.js remove --title="some title"

//
// challenge 3
// use chalk to provie usefull logs for remove
//

//1. if a note is removed, print "Note removed" with a green background
//2. if not note is removed, print "No note found!" with a red background







// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
    // console.log("Title: " + argv.title);
    // console.log("Body: " + argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();
