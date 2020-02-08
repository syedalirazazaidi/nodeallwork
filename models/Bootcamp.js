const mongoose =require('mongoose');
const BootcampSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true,'plz add a name'],
        unique : true,
        trim : true,
        maxlength : [50,'name cannot be more then 50 character']
    },
    slug : String,
    description : {
        type : String,
        required : [true,'plz add a description'],
        trim : true,
        maxlength : [500,'name cannot be more then 500 character']
    },
    website:{
        type : String,
        match : [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'plz use a valid URL http or https']
    },
    phone  :{
        type  : String,
        maxlength :[20,'phone number can not be longer then 20 character']
    },
    
   address : {
       type : String,
       required : [true,'plz add an address']
   },
   createdAt:{
       type:Date,
       default:Date.now

   }
})
module.exports=mongoose.model('Bootcamp',BootcampSchema)