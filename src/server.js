const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());
const mongodbpath = "mongodb+srv://Amit:Amit@cluster0.nag6co2.mongodb.net/notesdb";
mongoose.connect(mongodbpath).then(function() {

//home page route
app.get("/", function(req, res) {
     const responce = {massage : "API works!"};
     res.json(responce);
});

const noteRouter = require('./routes/Note');
app.use("/notes", noteRouter);

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log("Server Started A Port: " + PORT);
});