const ErrorResponse = require('../utils/ErrorResponse')

function errorHandler(err, req, res, next) {
  let error = {...err}
  error.message = err.message

  console.log(err.stack.red)
  
  if(err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`
    error = new ErrorResponse(message, 404)
  }
  
  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    success: false,
    error: error.message || 'Server Error'
  })
}

module.exports = errorHandler