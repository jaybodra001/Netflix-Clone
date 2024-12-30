import express from 'express';
import { getSimilarTV, getTrendingTV, getTVByCategory, getTVDeatails, getTVtrailers } from '../controllers/tv.controller.js';

const router = express.Router()
router.get("/trending", getTrendingTV)
router.get("/:id/trailers", getTVtrailers)
router.get("/:id/details", getTVDeatails)
router.get("/:id/similar", getSimilarTV)
router.get("/:category", getTVByCategory)

export default router