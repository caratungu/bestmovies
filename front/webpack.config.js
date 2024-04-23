module.exports = {
    entry: {
        bundle: "./scripts/index.js",
        bundleCreateMovie: "./scripts/createMovie.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js",
    },
};