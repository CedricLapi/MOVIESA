const Movie = require('../models/movie.models');

module.exports.findAllMovies = (req, res) => {
    Movie.find()
        .then(allMovies => res.json({ movies: allMovies }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
},

module.exports.create = (req, res) => {
    const { title, genre, year } = req.body;
    Movie.create({
        title,
        genre,
        year
    })
        .then(newMovie => res.json({ movie: newMovie }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));

},

module.exports.findByGenre = (req, res) => {
    Movie.find({ genre: req.params.genre.toLowerCase() })
    .then(movie => res.json({ movie }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
},

//would give the first movie of the genre
module.exports.findByGenreOne = (req, res) => {
    Movie.findOne({ genre: req.params.genre.toLowerCase() })
    .then(movie => res.json({ movie }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
},

module.exports.findOneById = (req, res) => {
    Movie.findById({ _id: req.params.id })
    .then(movie => res.json({ movie }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
},

//Update one Movie by ID with PUT
/*module.exports.updateMovie = (req, res) => {
    Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedMovie => res.json({ movie: updatedMovie }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
},*/

//Updtae one Movie by ID with PATCH

module.exports.updateMovie = (req, res) => {
    Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedMovie => res.json({ movie: updatedMovie }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
},

module.exports.deleteMovie = (req, res) => {
    Movie.findByIdAndDelete({_id: req.params.id})
    .then(deleteConfirmation => res.json({ deleteConfirmation }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}



