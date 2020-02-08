const Bootcamp = require("../models/Bootcamp")

exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find()
        res.status(200).json({ sucess: true, message: "show all bootcamp", data: bootcamps
    ,count:bootcamps.length })
    }
    catch (err) {
        res.status(400).json({ sucess: false })
    }
}
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)
        if (!bootcamp) {
           return  res.status(200).json({ sucess: true, data: bootcamp, message: `show single bootcamp ${req.params.id}` })
        }

    }
    catch (err) {
        res.status(400).json({ sucess: false })

    }
}

exports.createBootcamp = async (req, res, next) => {
    console.log("all:", req.body)
    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({ sucess: true, message: "create new bootcamp", data: bootcamp })
    } catch (err) {
        res.status(400).json({ sucess: false })
    }

}
exports.updateBootcamp =async (req, res, next) => {
    const bootcamp=await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{new : true,runValidators:true})
    if(!bootcamp){
    return   res.status(400).json({ sucess: false })
    }
    res.status(200).json({sucess : true ,data : bootcamp})
    
}
exports.deleteBootcamp =async (req, res, next) => {
    try {
    const bootcamp=await Bootcamp.findByIdAndDelete(req.params.id)
    if(!bootcamp){
    return  res.status(400).json({ sucess: false })
    }
    res.status(200).json({sucess:true,data:{}})
}
    catch(err)
    
    {res.status(400).json({sucess : true})}
    
}