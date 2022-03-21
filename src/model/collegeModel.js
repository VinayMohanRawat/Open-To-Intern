const mongoose = require("mongoose")

const collegeSchema = new mongoose.Schema({
     name: { 
         type : String,
         require : true,
         unique : true,
         trim : true,
         lowercase : true
        }, 
    fullName : {
        type : String,
        require : true,
        trim : true
        }, 
    logoLink: {
        type : String,
        URL : String,
        require : true,
        trim : true,
        lowercase : true
    }, 
    isDeleted: {
        type : Boolean,
     default: false
    },
}, { timestamps: true });

module.exports = mongoose.model("College", collegeSchema)