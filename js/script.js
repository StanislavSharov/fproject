"use strict";
 const numberOfFilms = +prompt('How many films have you watched','');
 
 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };
        const a = prompt('Який був останній?','');
        const b = prompt('На скільки оціниш?','');
        const c = prompt('Який був останній?','');
        const d = prompt('На скільки оціниш?','');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);