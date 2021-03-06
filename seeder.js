///////using seeder


const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })
const Bootcamp = require("./models/Bootcamp");
mongoose.connect('mongodb://localhost:27017/node_api', { useNewUrlParser: true 
, useCreateIndex: true,
useFindAndModify: false,
useUnifiedTopology: true 

});
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps)
        console.log('Data imported......');
        process.exit()
    }
    catch (err) {
        console.log("error : ", err)
    }
}
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany();
        console.log('Data delete......');
        process.exit()
    }
    catch (err) {
        console.log("error : ", err)
    }
}
if(process.argv[2]==='-i'){
    importData();
}
else if(process.argv[2]==='-d'){
    deleteData()
}