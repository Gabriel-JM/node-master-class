import { NextFunction, Request, Response } from "express"
import { Middleware } from "./types-interfaces"

const asyncHandler = (func: Middleware) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return Promise
      .resolve(func(req, res, next) as NextFunction)
      .catch(next)
  }
}

export default asyncHandler
