const MovieController = require('../controllers/movie.controller');

module.exports = app => {

    app.get('/api/movies', MovieController.findAllMovies);

    app.get('/api/movies/:genre', MovieController.findByGenre);
    
    app.get('/api/movies/one_movie/:id', MovieController.findOneById);

    app.get('/api/movies/just_first/:genre', MovieController.findByGenreOne);

    app.post('/api/movies', MovieController.create);

    app.patch('/api/movies/update/:id', MovieController.updateMovie);

    app.delete('/api/movies/delete/:id', MovieController.deleteMovie);

    //app.put('/api/movies/update/:id', MovieController.updateMovie);
}