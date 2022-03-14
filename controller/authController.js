import UserSchema from '../models/User.js';

const register =  async (req,res) => {




        const user = await UserSchema.create(req.body);
        res.status(201).json(user)


  
}


const login =  async (req,res) => {

    res.send('login user')
}


const updateUser =  async (req,res) => {

      res.send('update user')
}


export {updateUser,register, login};