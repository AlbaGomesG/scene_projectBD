const pool = require("../config/database");

const getMovies = async (title) => {
    if (!title) {
        const result = await pool.query("SELECT * FROM movies");
        return result.rows;
    } else {
        const result = await pool.query(`SELECT * FROM movies WHERE movies.title ILIKE $1`, [`%${title}%`]);
        return result.rows;
    }
};

const getMovieById = async (id) => {
    const result = await pool.query("SELECT * FROM movies WHERE id = $1", [id]);
    return result.rows[0];
};

module.exports = { getMovies, getMovieById };