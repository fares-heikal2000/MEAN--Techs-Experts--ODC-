const yargs = require("yargs");
const chalk = require("chalk");
const mainFunctions = require("./functions");

// add Command 
yargs.command({
    command: "add",
    describe: "To Add A New User",
    bulider: {
        id: {
            describe: "User Id",
            demandOption: true,
            type: "number"
        },
        name: {
            describe: "User Name",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "User Age",
            demandOption: true,
            type: "number"
        },
        active: {
            describe: "User State",
            demandOption: true,
            // I Can't Take A Boolean
            type: "boolean"
        }
    },
    handler: (argv) => {
        mainFunctions.addNotes(argv.id, argv.name, argv.age, argv.active)
    }
});

// Remove Command 
yargs.command({
    command: "remove",
    describe: "To remove A User",
    bulider: {
        id: {
            describe: "User Id",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        mainFunctions.removeNote(argv.id)
    }
});

// Show All Command 
yargs.command({
    command: "showAll",
    describe: "To Show All Users",
    handler: () => {
        mainFunctions.showAllNotes()
    }
});

// Show Single Command 
yargs.command({
    command: "showOne",
    describe: "To Show A User",
    bulider: {
        id: {
            describe: "User Id",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        mainFunctions.showOne(argv.id)
    }
});

yargs.parse();
console.log(chalk.green("All Program Has Done !!"));