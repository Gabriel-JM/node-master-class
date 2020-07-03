import ErrorResponse from '../utils/ErrorResponse'
import { Request, Response, NextFunction } from 'express'
import { RequestError } from './types-interfaces'

function errorHandler(err: RequestError, req: Request, res: Response, next: NextFunction) {
  let error: Error = { ...err }
  
  if(err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`
    error = new ErrorResponse(message, 404)
  }

  const duplicateKey = 11000
  if(err.code === duplicateKey) {
    const message = 'Duplicate field value entered'
    error = new ErrorResponse(message, 400)
  }

  if(err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val: any) => val.message)
    error = new ErrorResponse(message.toString(), 400)
  }
  
  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    success: false,
    error: error.message || 'Server Error'
  })

  next()
}

export default errorHandler
