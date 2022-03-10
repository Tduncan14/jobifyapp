const errorHandlerMiddleWare = (err,req,res,next) => {

    console.log(err);

    res.status(500).json({msg:'There was an error'})





    res.status(404).send()



};



export default errorHandlerMiddleWare