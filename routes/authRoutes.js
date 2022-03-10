import express from 'express';
import {register,login,updateUser} from '../controller/authController.js'



  const router = express.Router();


  router.post('/register',register)
  router.post('/login',login)
  router.post('/updateUser',updateUser)





  export default router;