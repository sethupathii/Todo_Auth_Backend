const Data = require('../models/model');

const mongoose = require('mongoose'); // Import mongoose

exports.getData = async (req, res) => {
    try {
        const userId = req.user._id;

        const allTodos = await Data.find({ user: userId });

        if (!allTodos || allTodos.length === 0) {
            return res.status(404).json({ error: 'No todos found for this user' });
        }

        res.status(200).json(allTodos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.saveData = async (req, res) => {
    const name = req.body.name;
    const user = req.user;

    // Check if the name field is empty or undefined
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    try {
        const newTodo = new Data({
            name: name,
            user: user._id
        });

        const savedTodo = await newTodo.save();
        console.log("The new post data is ", savedTodo);
        res.status(201).json(savedTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};



exports.updateData = (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    Data.findByIdAndUpdate(id, { name })
        .then(() => {
            res.send("Updated Successfully");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ error: err.message, note: "Something went wrong" });
        });
}

exports.deleteData = (req, res) => {
    const id = req.params.id;
    Data.findByIdAndDelete(id)
        .then(() => {
            console.log("Deleted Sucessfully");
            res.send("Deleted Sucessfully");
        }).catch(err => console.log(err));
}