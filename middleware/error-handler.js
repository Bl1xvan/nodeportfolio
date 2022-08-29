const CustomAPIError = require('.../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) =>{
    if(err instanceof CustomAPIError){
        return res.status(err.status).error({msg: err.message})
    }
    return res.status(500).error({msg: "Something went wrong. Please try again later"})
}

module.exports = errorHandlerMiddleware;