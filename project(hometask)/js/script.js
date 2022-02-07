/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// 'use strict';

// first
// const numberOfFilms = +prompt("How many movies have you already watched?", "");
// console.log(numberOfFilms);

// // second
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// // third
// let lastMovie = prompt("What was your last movie, you watched?", ""),
//     estimationLastMovie = prompt("How you estimate the movie? how many points do you rate the film?", "");
// personalMovieDB.movies[lastMovie] = estimationLastMovie;

// console.log(personalMovieDB);


// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt("How many movies have you already watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastMovie, estimationLastMovie;
for (let i = 0; i < numberOfFilms/2; i++) {
    lastMovie = prompt("What was one of your last movie, you watched?", ""),
        estimationLastMovie = prompt("How you estimate the movie? how many points do you rate the film?", "");
    if (lastMovie === "" || estimationLastMovie === "" || lastMovie === null || estimationLastMovie === null ||
        lastMovie.length > 50) {
        i--;
        continue;
    }
    personalMovieDB.movies[lastMovie] = estimationLastMovie;
}

// let i = 1;
// do {
//     lastMovie = prompt("What was one of your last movie, you watched?", ""),
//         estimationLastMovie = prompt("How you estimate the movie? how many points do you rate the film?", "");
//     if (lastMovie === "" || estimationLastMovie === "" || lastMovie === null || estimationLastMovie === null ||
//         lastMovie.length > 50) {
//         --;
//     }
//     personalMovieDB.movies[lastMovie] = estimationLastMovie;
//     i++;
// } while (i <= numberOfFilms/2);

// let i = 0;
// while( i < numberOfFilms/2) {
//     lastMovie = prompt("What was one of your last movie, you watched?", ""),
//     estimationLastMovie = prompt("How you estimate the movie? how many points do you rate the film?", "");
//     if (lastMovie === "" || estimationLastMovie === "" || lastMovie === null || estimationLastMovie === null ||
//         lastMovie.length > 50) {
//         i--;
//     }
//     personalMovieDB.movies[lastMovie] = estimationLastMovie;
//     i++;
// }


const count = personalMovieDB.count;
console.log(count);
if (count > 30) {
    console.log("Вы киноман");
} else if (count <= 30 && count >= 10) {
    console.log("Вы классический зритель");
} else if (count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);