import mongoose from "mongoose";



const UserSchema =  new  mongoose.Schema ({


    name:{
        type:String,
        min: 3,
        trim:true,
        maxlength:20,
        required:[true,'Please provide name']
    },

    email:{
        type:String,
        required:[true,'please provide email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Please provide password'],
        minlength:6
    },

    lastname:{
        type:String,
        trim:true,
        maxlength:20,
        default:'lastname'
    },

    location:{
        type:'String',
        trim:true,
        maxlength:20,
        default:'my city'

    }
})



   export default mongoose.model('User',UserSchema)
