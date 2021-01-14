'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMoviesDB.movies[a] = b;
        console.log('done');
    } else {
        console.error('error');
        i--;
    }
}

if (personalMoviesDB.count < 10) {
    console.log(`Few flms watched!`);
} else if (personalMoviesDB.count >= 10 && personalMoviesDB <= 30) {
    console.log(`You're classical cinemafil!`);
} else if (personalMoviesDB.count >= 30) {
    console.log(`You're supercinemalover!`);
} else {
    console.log(`An error occused!!!`);
}

console.log(personalMoviesDB);