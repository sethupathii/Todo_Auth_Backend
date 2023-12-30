
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const model = mongoose.model('Todo', todoSchema);

module.exports = model;
