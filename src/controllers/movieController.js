const movieModel = require("../models/movieModel");

const getAllMovies = async (req, res) => {
    try {
        const movies = await movieModel.getMovies();
        res.json(movies);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar filmes 🎥"});
    }
};

const getMovie = async (req, res) => {
    try {
        const movie = await movieModel.getMovieById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Filme não encontrado 🎬"});
        }
        res.json(movie);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar filme 📽️"});
    }
};

module.exports = { getAllMovies, getMovie };