import express from 'express'
import { getMovieDeatails, getMoviesByCategory, getMovietrailers, getSimilarMovies, getTrendingMovie } from '../controllers/movie.controller.js';

const router = express.Router()

router.get("/trending", getTrendingMovie)
router.get("/:id/trailers", getMovietrailers)
router.get("/:id/details", getMovieDeatails)
router.get("/:id/similar", getSimilarMovies)
router.get("/:category", getMoviesByCategory)

export default router