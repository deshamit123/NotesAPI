const express = require('express');
const router = express.Router();
const Note = require('./../models/Note');



//notes page route
router.post("/list", async function(req, res) {
    var notes = await Note.find({userid: req.body.userid });
    res.json(notes);
    //res.send("This is A Notes Page");
});

// notes add route
router.post("/add", async function(req, res) {

    await Note.deleteOne({id: req.body.id});

    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content
    });
   await newNote.save();
const responce = {massage: "New Note Created!" + `id: ${req.body.id}`};
    res.json(responce);
});

router.post("/delete",async function(req, res) {
    await Note.deleteOne({id: req.body.id});
    const responce = {massage: "New Note Deleted" + `id: ${req.body.id}`};
    res.json(responce);
});

module.exports = router;