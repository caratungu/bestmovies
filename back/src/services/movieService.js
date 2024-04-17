const axios = require("axios");

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await axios.get("https://students-api.up.railway.app/movies");
      return movies.data;
      res.status(200).json(movies.data);
    } catch (error) {
      alert("Error al cargar las películas");
    }
  }
};
