require("dotenv").config()
const mongoose = require('mongoose');
const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const connection = mongoose.connect('mongodb+srv://crimecheck:crimecheck@cluster0.yhlcmsg.mongodb.net/?retryWrites=true&w=majority',connectionparams);

module.exports=connection;