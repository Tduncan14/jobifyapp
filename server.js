import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleWare from './middleware/errorhandler.js';




const app = express();



//middleware

app.get('/',(req,res)=>{
   
    res.send('hello')
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleWare)




const port = process.env.PORT || 5000;



app.listen(port,() => {

    console.log(`listening on server ${port}`)
})