import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleWare from './middleware/errorhandler.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRouter from './controller/authController.js';

dotenv.config()







const app = express();

 mongoose.connect(process.env.URI)
 .then(() => console.log('connected to the database'));



//middleware

app.use(express.json())


app.get('/',(req,res)=>{
   
    res.send('hello')
})

// midd.e

app.use('/api/v1/auth',authRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleWare)




const port = process.env.PORT || 5000;



app.listen(port,() => {

    console.log(`listening on server ${port}`)
})