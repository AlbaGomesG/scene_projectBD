const movieModel = require("../models/movieModel");

const getAllMovies = async (req, res) => {
    try {
        const movies = await movieModel.getMovies();
        res.json(movies);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar filmes 🎥"});
    }
};

module.exports = { getAllMovies };