

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbName = 'ava';

const mongodb = async () => {
    try {
        await mongoose.connect(process.env.Mongo_DB, {
            dbName: dbName
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        // You might want to handle the error further here,
        // such as attempting a reconnection or other actions.
    }
};

module.exports = mongodb;







// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();

// const dbName = 'ava';

// const mongodb = async () => {
//     try {
//         await mongoose.connect(process.env.Mongo_DB,{
//             dbName: dbName
//         });
//         console.log("Connected to mongodb");
//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = mongodb;