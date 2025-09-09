const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const upload = require("../config/upload");

router.get("/movies", movieController.getAllMovies);
router.get("/movies/:id", movieController.getMovie);
router.post("/movies", upload.single("photo"), movieController.createMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);

module.exports = router;