import mongoose from "mongoose";
import validator from 'validator';


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
        validate:{
            validator:validator.isEmail,
            message:'Please provide valid email'
           
        }
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
