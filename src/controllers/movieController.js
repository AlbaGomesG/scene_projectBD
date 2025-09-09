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

const createMovie = async (req, res) => {
    try {
        const { title, genero, ano_lancamento, sinopse } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newMovie = await movieModel.createMovie(photo, title, genero, ano_lancamento, sinopse);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ message: "Erro ao criar filme 🍿"});
    }
};

const updateMovie = async (req, res) => {
    try {
        const { sinopse } = req.body;
        const updateMovie = await movieModel.updateMovie(req.params.id, sinopse);
        if (!updateMovie) {
            return res.status(404).json({ message: "Filme não encontrado 🎞️"});
        }
        res.json(updateMovie);
    } catch (error) {
        res.status(400).json({ message: "Erro ao atualizar filme 🎞️"});
    }
};

const deleteMovie = async (req, res) => {
    try {
        const movie = await movieModel.deleteMovie(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Filme não encontrado 🎬"});
        }
        return res.status(200).json({ message: "Filme deletado com sucesso 🎬", movie });
    } catch (error) {
        res.status(400).json({ message: "Erro ao deletar filme 🎬"});
    }
};

module.exports = { getAllMovies, getMovie, createMovie, updateMovie, deleteMovie };