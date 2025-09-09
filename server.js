require("dotenv").config();
const express = require("express");
const cors = require("cors");
const movieRoutes = require("./src/routes/movieRoutes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", movieRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
