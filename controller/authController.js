

const register =  async (req,res) => {

    res.status(200).send('register')
}


const login =  async (req,res) => {

    res.send('login user')
}


const updateUser =  async (req,res) => {

      res.send('update user')
}


export {updateUser,register, login};