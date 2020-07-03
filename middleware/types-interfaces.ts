import { Request, Response, NextFunction } from "express";

export type Middleware = (req: Request, res: Response, next: NextFunction) => Promise<void> | NextFunction

export interface RequestError extends Error {
  value: string | number
  code: string | number
  statusCode: number
  errors: Error[]
}
