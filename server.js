const express = require('express');
const dotenv = require("dotenv");
const morgan = require("morgan")
const connectDB = require('./config/db')
const bodyparser = require('body-parser')
dotenv.config({ path: './config/config.env' });
connectDB();
const app = express();
app.use(express.json())
if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'))
}
const bootcamp = require('./routes/bootcamp')
app.use('/api/v1/bootcamps', bootcamp)
const PORT = process.env.PORT || 5000
process.on('unhandledRejection', (err, promise) => {
    console.log(`error ${err.message}`);
    // server.close(() => {
    //     process.exit(1)
    // })
})
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV}mode on port${PORT}`));