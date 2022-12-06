const fs = require("fs")
const addNote = function(title, body){
    const notes = loadNotes();
    // const duplicated = notes.filter(function(note) {
    //     return note.title === title
    // })
    // if (duplicated.lengh === 0) {
        notes.push({
            title: title,
            body: body,
        })
        saveNote(notes);
        console.log("Note Added");
    // } else {
    //     console.log("No Note Taken");
    // }


}
const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    saveNote(notesToKeep)
}


const saveNote = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON)
}
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    } catch (e){
        return []
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote
}