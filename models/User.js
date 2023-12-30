const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Other fields...
    password: {
        type: String,
        required: true,
    },
    joinedon: {
        type: Date,
        default: Date.now(),
    },
    forgetpassword: {
        time: Date,
        otp: String,
    },
    token: {
        type: String,
    },
},
    {
        collection: "User"
    });

module.exports = mongoose.model("User", userSchema);
