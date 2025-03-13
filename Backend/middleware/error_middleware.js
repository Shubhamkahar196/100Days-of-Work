const errorHandler = (error,req,res,next) =>{
    res.status(500).send({
        error : 'internal server error'
    });
};

module.exports = errorHandler;