import UserSchema from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError,NotFoundError } from '../error/index.js';







const register =  async (req,res) => {

      const {name,email,password} = req.body;


    //   find email
    if(!name || !email || !password){
        throw new BadRequestError('please provide all values')
    }


    const userAlreadyExist = await UserSchema.findOne({email});


    if(userAlreadyExist){
        throw new Error('Email are in use');
    }


        const user = await UserSchema.create(req.body);
        const token = user.createJWT()
        res.status(StatusCodes.CREATED).json({
            user:{
                email:user.email,
                lastName:user.lastName,
                location:user.location,
                name:user.name

            }
            ,token})


  
}


const login =  async (req,res) => {

    res.send('login user')
}


const updateUser =  async (req,res) => {

      res.send('update user')
}


export {updateUser,register, login};