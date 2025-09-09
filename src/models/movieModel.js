const pool = require("../config/database");

const getMovies = async () => {
    const result = await pool.query("SELECT * FROM movies");
    return result.rows;
};

const getMovieById = async (id) => {
    const result = await pool.query("SELECT * FROM movies WHERE id = $1", [id]);
    return result.rows[0];
};

module.exports = { getMovies, getMovieById };