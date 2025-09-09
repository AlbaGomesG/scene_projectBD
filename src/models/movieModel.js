const pool = require("../config/database");

const getMovies = async () => {
    const result = await pool.query("SELECT * FROM movies");
    return result.rows;
};

module.exports = { getMovies };