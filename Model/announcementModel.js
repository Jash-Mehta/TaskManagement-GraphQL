const mongoose = require('mongoose');

const Announcements = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    startdate:{
        type:String,
        require:true
    },
    enddate:{
        type:String,
        require:true
    }
});

const announcements = mongoose.model("Announcement", Announcements);
module.exports = announcements;