const errorHandlerMiddleWare = (err,req,res,next) => {

    console.log(err);

    res.status(500).json({msg:'There was an error',err:err})




};



export default errorHandlerMiddleWare