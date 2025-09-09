const pool = require("../config/database");

const getMovies = async () => {
    const result = await pool.query("SELECT * FROM movies");
    return result.rows;
};

const getMovieById = async (id) => {
    const result = await pool.query("SELECT * FROM movies WHERE id = $1", [id]);
    return result.rows[0];
};

const createMovie = async (photo, title, genero, ano_lancamento, sinopse) => {
    const result = await pool.query("INSERT INTO movies (photo, title, genero, ano_lancamento, sinopse) VALUES ($1, $2, $3, $4, $5) RETURNING *", [photo, title, genero, ano_lancamento, sinopse]);
    return result.rows[0];
};

module.exports = { getMovies, getMovieById, createMovie };