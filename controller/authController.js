

const register = (req,res) => {

    res.send('register')
}


const login = (req,res) => {

    res.send('login user')
}


const updateUser = (req,res) => {

      res.send('update user')
}


export {updateUser,register, login};