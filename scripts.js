'use strict';

const personalMoviesDB = {
    count: 0,
    movies:{},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log(`Few flms watched!`);
        } else if (this.count >= 10 && this <= 30) {
            console.log(`You're classical cinemafil!`);
        } else if (this.count >= 30) {
            console.log(`You're supercinemalover!`);
        } else {
            console.log(`An error occused!!!`);
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    toggleVisibleMyDB: function() {
        if(this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if(genre === "" || genre === null) {
            //     console.log("Вы ввели некорректные данные или не ввели их вовсе");
            //     i--;
            // } else {
            //     this.genres[i - 1] = genre;
            // }
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase;

            if(genres === "" || genres === null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            } else {
                this.genres = genres.split(', ');
                this.genres.sort();
            }
        }

        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};