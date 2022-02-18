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

// ---------------------------------------------------------------------------
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

// const numberOfFilms = +prompt("How many movies have you already watched?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// let lastMovie, estimationLastMovie;
// for (let i = 0; i < numberOfFilms/2; i++) {
//     lastMovie = prompt("What was one of your last movie, you watched?", "");
//     estimationLastMovie = prompt("How you estimate the movie? how many points do you rate the film?", "");
//     if (lastMovie === "" || estimationLastMovie === "" || lastMovie === null || estimationLastMovie === null ||
//         lastMovie.length > 50) {
//         i--;
//         continue;
//     }
//     personalMovieDB.movies[lastMovie] = estimationLastMovie;
// }

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


// const count = personalMovieDB.count;
// console.log(count);
// if (count > 30) {
//     console.log("Вы киноман");
// } else if (count <= 30 && count >= 10) {
//     console.log("Вы классический зритель");
// } else if (count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);

//---------------------------------------------------------------------------
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// let numberOfFilms;
//
//
// function getNumberOfFilms () {
//     numberOfFilms = +prompt("How many movies have you already watched?", "");
//     if (numberOfFilms === 0 || numberOfFilms === null || isNaN(numberOfFilms)) {
//         getNumberOfFilms();
//     }
// }
//
// getNumberOfFilms();
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
//
// function getTwoLastMovies () {
//     for (let i = 0; i < 2; i++) {
//         let lastMovie = prompt("What was one of your last movie, you watched?", ""),
//             estimationLastMovie = prompt("How you estimate the movie? how many points do you rate the film?", "");
//         if (lastMovie === "" || estimationLastMovie === "" || lastMovie === null || estimationLastMovie === null ||
//             lastMovie.length > 50) {
//             i--;
//             continue;
//         }
//         personalMovieDB.movies[lastMovie] = estimationLastMovie;
//     }
// }
//
// // getTwoLastMovies();
//
// function detectPersonalLevel() {
//     const count = personalMovieDB.count;
//     console.log(count);
//     if (count > 30) {
//         console.log("Вы киноман");
//     } else if (count <= 30 && count >= 10) {
//         console.log("Вы классический зритель");
//     } else if (count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }
//
// detectPersonalLevel();
//
//
// console.log(personalMovieDB);
//
// function showMyBD () {
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB);
//     }
// }
//
// showMyBD();
//
// function writeYourGenres () {
//     for (let i = 0; i <= 2; i++) {
//         const genre = prompt(`What's your favourite genre at number ${i+1}?`);
//         personalMovieDB.genres[i] = genre;
//     }
// }
//
// writeYourGenres();
//
// ----------------------------------------------------------------------------------
//
// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
//
// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
//
// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


// const personalMovieDB = {
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     getNumberOfFilms: function f () {
//         let numberOfFilms = +prompt("How many movies have you already watched?", "");
//         if (numberOfFilms === 0 || numberOfFilms == null || isNaN(numberOfFilms)) {
//             f();
//         }
//         personalMovieDB['count'] = numberOfFilms;
//     },
//     getTwoLastMovies: function () {
//         for (let i = 0; i < 2; i++) {
//             let lastMovie = prompt("What was one of your last movie, you watched?", ""),
//                 estimationLastMovie = prompt("How you estimate the movie?", "");
//             if (lastMovie === "" || estimationLastMovie === "" || lastMovie === null ||
//             estimationLastMovie === null || lastMovie.length > 50) {
//                 i--;
//                 continue;
//             }
//             personalMovieDB.movies[lastMovie] = estimationLastMovie;
//         }
//     },
//     detectPersonalLevel: function () {
//         const count = personalMovieDB.count;
//         console.log(count);
//         if (count > 30) {
//             console.log("Вы киноман");
//         } else if (count <= 30 && count >= 10) {
//             console.log("Вы классический зритель");
//         } else if (count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyBD: function () {
//         if (personalMovieDB.privat === false) {
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 0; i <= 2; i++) {
//             const genre = prompt(`What's your favourite genre at number ${i + 1}?`);
//             if (genre === '' || genre === null) {
//                 i--;
//                 alert("Incorrect insert information. Try again");
//                 continue;
//             }
//             personalMovieDB.genres[i] = genre;
//         }
//         personalMovieDB.genres.forEach((value, index) => {
//             console.log(`Favourite genre ${index + 1} - is ${value}`);
//         });
//     },
//     toggleVisibleMyDB: function () {
//         personalMovieDB.privat? personalMovieDB.privat = false : personalMovieDB.privat = true;
//     }
//
// };
//
// console.log(personalMovieDB);



// ---------------------------------------------------------
// •	Какое будет выведено значение: let x = 5; alert( x++ ); ?
// 5

// •	Чему равно такое выражение: [ ] + false - null + true ?
// 'NaN'

// •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// 2

// •	Чему равна сумма [ ] + 1 + 2?
// '12'

// •	Что выведет этот код: alert( "1"[0] )?
// 1

// •	Чему равно 2 && 1 && null && 0 && undefined ?
// null

// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// yes

// •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// 3

// •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// false

// •	Что выведет этот код: alert( +"Infinity" ); ?
// Infinity

// •	Верно ли сравнение: "Ёжик" > "яблоко"?
// false

// •	Чему равно 0 || "" || 2 || undefined || true || falsе ?
// 2