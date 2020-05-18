function errorHandler(err, req, res, next) {
  console.log(err.stack.red)
  const statusCode = err.statusCode || 500

  res.status(statusCode).json({
    success: false,
    error: err.message || 'Server Error'
  })
}

module.exports = errorHandler