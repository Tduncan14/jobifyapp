import UserSchema from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

const register =  async (req,res) => {




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