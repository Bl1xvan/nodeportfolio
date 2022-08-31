const errorHandlerMiddleware = (req, res, next) =>{
    return res.status(500).error({msg: "Something went wrong. Please try again later"})
}

module.exports = errorHandlerMiddleware;