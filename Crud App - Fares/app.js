const notes = require("./modules/add.module")
const yargs = require('yargs')
const fs = require("fs");
yargs.command({
    command: "add",
    describe: "Use it to add a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes(argv.title, argv.body)
    }
})
// ShowAll Command
yargs.command({
    command: "showAll",
    describe: "Use it to showAll all notes",
    handler: function(){
        console.log("Show All notes....");
    }
})
// showSingle Command
yargs.command({
    command: "showSingle",
    describe: "Use it to showSingle a note",
    handler: function(){
        console.log("Show a note....");
    }
})
// Edit Command
yargs.command({
    command: "edit",
    describe: "Use it to edit a note",
    handler: function(){
        console.log("edit a note....");
    }
})
// remove||delete Command
yargs.command({
    command: "del",
    describe: "Use it to remove a new note",
    handler: function(){
        console.log("remove a note....");
    }
})
yargs.parse()

// write json file
// const yasser = process.argv[2];

// fs.writeFileSync("data.json", JSON.stringify(yasser))



// read json file
// const result = fs.readFileSync("data.json")
// console.log(JSON.parse(result))
