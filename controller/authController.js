import UserSchema from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError,NotFoundError } from '../error/index.js';







const register =  async (req,res) => {

      const {name,email,password} = req.body;


    //   find email


    const userAlreadyExist = await UserSchema.findOne({email});


    if(userAlreadyExist){
        throw new Error('Email are in use');
    }


      if(!name || !email || !password){
          throw new BadRequestError('please provide all values')
      }



        const user = await UserSchema.create(req.body);
        res.status(StatusCodes.CREATED).json({user})


  
}


const login =  async (req,res) => {

    res.send('login user')
}


const updateUser =  async (req,res) => {

      res.send('update user')
}


export {updateUser,register, login};