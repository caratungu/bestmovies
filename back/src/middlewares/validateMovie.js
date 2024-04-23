const validateMovie = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    if(!title || !year || !director || !duration || !rate || !poster  || genre.length < 1) {
        // throw new Error ("Información incompleta")
        return res.status(400).json({
            error: "Información incompleta",
        });
    };
    if (year < 1000 || year > 9999 ) {
        // throw new Error ("El año debe se un número de cuatro dígitos");
        return res.status(400).json({
            error: "El año debe se un número de cuatro dígitos",
        });
    };
    if (!(poster.endsWith(".jpg") || poster.endsWith(".jpeg") || poster.endsWith(".png") || poster.endsWith(".gif") || poster.endsWith(".svg"))) {
        return res.status(400).json({
            error: "Formato de imagen inválido. Formatos aceptados .jpg, .jpeg, .png, .gif o .svg",
        });
    };
    if (rate < 0 || rate >10) {
        return res.status(400).json({
            error: "El rate debe ser un número entre 0 y 10",
        });
    };
    next();
};

module.exports = validateMovie;