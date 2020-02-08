const mongoose = require("mongoose");
const connectDB = async () => {
    const conn = await mongoose.connect('mongodb://localhost:27017/node_api', {
        useNewUrlParser: true
        , useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
    });
    console.log(`mongodb connected on ${conn.connection.host}`)
}
module.exports = connectDB;