const mongoose = require('mongoose');

const userpostSchema = new mongoose.Schema({

    username: String,
    post: String,
    createdtime:{
        type:String,
        default:null
    }
})
module.exports= mongoose.model("noticedata", userpostSchema);