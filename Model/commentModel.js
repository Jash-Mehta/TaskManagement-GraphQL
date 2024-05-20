const mongoose = require('mongoose');

const Comment = mongoose.Schema({
    taskId:{
        type: mongoose.Schema.Types.ObjectId,
    ref:"Task",
    require: true
    
    
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        require: true
    },

    comment:{
        type:String,
        require:true
    }
});


const comment = mongoose.model("Comment",Comment);
module.exports = comment;