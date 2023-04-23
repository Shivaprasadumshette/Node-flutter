const express = require("express");
const router = express.Router();

const Note = require('./../models/note')

// Home Page Route
router.get("/", function (req, res) {
    res.send("This is the home page you are looking at the same time  have fun and joy !!!!");
});
// 
router.get("/list/:userid", async function (req, res) {
    var notes = await Note.find({ userid: req.params.userid.toString() });
    res.json(notes);
    // res.send("This is the Notes!!!!");
});


// adding notes to the list 
router.post("/add", async function (req, res) {
    // this is to avoid duplicate models in the database 
    await Note.deleteOne({ id: req.body.id });
    const NewNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content
    });
    await NewNote.save();

    const response = { message: "New Note Created!" + `${req.body.id}` };
    res.json(response);
    // res.send("This is the Notes!!!!");
    // res.json(req.body);
});


// delete 
router.post("/delete", async function (req, res) {
    await Note.deleteOne({ id: req.body.id });

    const response = { message: "Note Deleted Successfully!" + `${req.body.id}` };
    res.json(response);
});
module.exports = router