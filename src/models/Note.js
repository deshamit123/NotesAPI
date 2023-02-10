//steps
// 1.  Define Schema -> Note: id, userid, title, content, dataadded
// 2. Create Model -> <Model name> <Schema> Note


const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    id:{
        type: String,
        unique: true,
        require:true
    },
    userid:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    content:{
        type: String,
    },
    dateadded:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Note", noteSchema);