const fs = require("fs")
const chalk = require("chalk");
// Add Note Funcation
const addNotes = (id, name, age, active) => {
    const notesFromStorage = loadNotes();
    const duplicateNote = notesFromStorage.find((ele) => ele.id === id)
    if (!duplicateNote) {
        notesFromStorage.push({
            id: id,
            name: name,
            age: age,
            active: active
        })
        writeIntoJsonFile(notesFromStorage);
        console.log(chalk.green("A Single User Added !!"));
    } else {
        console.log(chalk.yellow(`This User Are Already In`))
    }
};

// Load All Notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    } catch (e) {
        return [];
    }
};

// Write Into A Json File
const writeIntoJsonFile = (newNote) => {
    notesInJson = JSON.stringify(newNote)
    fs.writeFileSync("notes.json", notesInJson);
};

// remove Note Funcation
const removeNote = (id) => {
    const notesFromStorage = loadNotes();
    const notsToKeep = notesFromStorage.filter((ele) => ele.id !== id);
    if (notsToKeep.length === notesFromStorage.length) {
        console.log("There Is No User With This Id In The App");
    } else if (notsToKeep.length < notesFromStorage.length) {
        console.log("This User Was Removed");
        writeIntoJsonFile(notsToKeep);
        showAllNotes();
    }
};

// ShoW All Funcation 
const showAllNotes = () => {
    const allNotes = loadNotes();
    console.log(allNotes);
};

// Show Ine Funcation
const showOne = (id) => {
    const allNotes = loadNotes();
    const wantedNote = allNotes.find((ele) => ele.id === id);
    if (!wantedNote) {
        console.log("There Is No User With This Id In The App");
    } else if (wantedNote) {
        console.log(wantedNote);
    }
};

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    showAllNotes: showAllNotes,
    showOne: showOne
};