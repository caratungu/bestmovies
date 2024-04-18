const validateMovie = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    if(!title || !poster || !director) {
        return res.status(400).json({
            error: "Información incompleta",
        });
    } else {
        next();
    }
};

module.exports = validateMovie;