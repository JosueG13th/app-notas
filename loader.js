
const DB = require('./database');
const inicialNotes = require ('./notes.json');

const dbRoot = async()=>{
    DB.insertMany(inicialNotes);
    console.log("Activation Completed!");
    console.log("Reload the page!");
}

dbRoot();