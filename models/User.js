const mongoose =require('mongoose');


const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        uniquie: true
    }, 
    password: {
        type: String,
        required: true,
        
    }, 
    date:{
        type: Date,
        default: Date.now()
    },
    role:{
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('user', UserSchema)