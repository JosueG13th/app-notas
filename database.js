const mongooseClient = require("mongoose");

mongooseClient.connect(
  "mongodb+srv://admin:admin@cluster0.gj7quos.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
  }
);

const NotesSchema = mongooseClient.Schema({
  title: String,
  description: String,
});

const Notes = mongooseClient.model("Notes", NotesSchema);

module.exports = Notes;
