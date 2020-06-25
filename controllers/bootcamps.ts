import { Request, Response, NextFunction } from 'express'
import ErrorResponse from '../utils/ErrorResponse'
import Bootcamp from '../models/Bootcamp'

//@desc    Get all bootcamps
//@route   GET /api/v1/bootcamps
//@access  Public
export const getBootcamps = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bootcamps = await Bootcamp.find()

    res.status(200).json({
      success: true,
      data: bootcamps
    })
  } catch(err) {
    next(err)
  }
}

//@desc    Get a single bootcamp
//@route   GET /api/v1/bootcamps/:id
//@access  Public
export const getBootcamp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id)

    if(!bootcamp) {
      return next(
        new ErrorResponse(
          `Bootcamp not found with id of ${req.params.id}`,
          404
        )
      )
    }

    res.status(200).json({
      success: true,
      data: bootcamp
    })
  } catch (err) {
    next(err)
  }
}

//@desc    Create new bootcamp
//@route   POST /api/v1/bootcamps
//@access  Private
export const createBootcamp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bootcamp = await Bootcamp.create(req.body)

    res.status(201).json({
      success: true,
      data: bootcamp
    })
  } catch(err) {
    next(err)
  }
}

//@desc    Update bootcamp
//@route   PUT /api/v1/bootcamps/:id
//@access  Private
export const updateBootcamp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    if(!bootcamp) {
      return next(
        new ErrorResponse(
          `Bootcamp not found with id of ${req.params.id}`,
          400
        )
      )
    }

    res.status(200).json({
      success: true,
      data: bootcamp
    })
  } catch (err) {
    next(err)
  }
}

//@desc    Delete bootcamp
//@route   DELETE /api/v1/bootcamps/:id
//@access  Private
export const deleteBootcamp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await Bootcamp.findByIdAndDelete(req.params.id)

    if(!result) {
      return next(
        new ErrorResponse(
          `Bootcamp not found with id of ${req.params.id}`,
          404
        )
      )
    }

    res.status(200).json({
      success: true,
      data: result
    })
  } catch (err) {
    next(err)
  }
}