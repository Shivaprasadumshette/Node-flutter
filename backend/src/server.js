const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/note');  

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



mongoose.connect("mongodb+srv://shiva:1234@cluster0.nvwmc0h.mongodb.net/notesdb").then(function () {
    app.get('/',function(req,res){
        const response = {message: "API works and is deployed!"};
        res.json(response);

    })
    const noteRouter = require('./routes/notes_routes');
    app.use('/notes',noteRouter);
});

const PORT= process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server running at port:" + PORT);
});