const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//list the movies
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(moviesFromDB => {
        // console.log(movies)
        res.render('movies', {movies: moviesFromDB})
    })
    .catch((err) => console.log('Error while getting the movies from the DB', err))
})


//display movie details 
router.get('/movies/:movieId', (req, res, next) => {
    const {movieId} = req.params
    Movie.findById(movieId)
    .then(movie => {
        console.log(movie)
        res.render('movieDetails', {movie})
    })
    .catch((err) => console.log('Error while getting the movie details from the DB', err))
})

module.exports = router;
