/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// document.querySelectorAll(".promo__adv img").forEach(item => item.remove());

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
// document.querySelector(".promo__genre").textContent = "Драма";

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//     Реализовать только при помощи JS
// document.querySelector(".promo__bg").style.backgroundImage = `url(img/bg.jpg)`;

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//     Отсортировать их по алфавиту
// 5) Добавить нумерацию выведенных фильмов */
// movieDB.movies.sort();
// const listFilms = document.querySelector(".promo__interactive-list");
// listFilms.innerHTML = '';
// movieDB.movies.forEach((value, index) => {
//     listFilms.innerHTML += `
//         <li class="promo__interactive-item">${index + 1}. ${value}
//             <div class="delete"></div>
//         </li>`;
// });

// ----------------------------------------------------------------------------------------
// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
// новый фильм добавляется в список. Страница не должна перезагружаться.
//     Новый фильм должен добавляться в movieDB.movies.
//     Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки//
// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
//     "Добавляем любимый фильм"
// 5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const addFilm = document.querySelector('.adding__input'),
        addForm = document.querySelector("form.add"),
        deleteBtn = document.getElementsByClassName('delete'),
        parentListFilms = document.querySelector(".promo__interactive-list"),
        advertisement = document.querySelectorAll(".promo__adv img"),
        checkbox = addForm.querySelector('[type = "checkbox"]');

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const sortAlphabet = array => array.sort();

    const fillListFilms = (films, parent) => {
        sortAlphabet(films);

        parent.innerHTML = '';
        films.forEach((value, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${index + 1}. ${value}
                    <div class="delete"></div>
                </li>`;
        });

        for (let i = 0; i < deleteBtn.length; i++){
            deleteBtn[i].addEventListener("click", () => {
                deleteBtn[i].parentElement.remove();

                movieDB.movies.splice(i, 1);
                fillListFilms(films, parent);
            });
        }
    };

    const deleteAdv = items => items.forEach(item => item.remove());

    const makeChanges = () => {
        document.querySelector(".promo__genre").textContent = "Драма";
        document.querySelector(".promo__bg").style.backgroundImage = `url(img/bg.jpg)`;
    };

    fillListFilms(movieDB.movies, parentListFilms);

    addForm.addEventListener('submit', e => {
        e.preventDefault();
        if (addFilm.value) {

            if (addFilm.value.length > 21) {
                addFilm.value = addFilm.value.slice(0, 21) + "...";
            }

            if (checkbox.checked) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(addFilm.value);
            fillListFilms(movieDB.movies, parentListFilms);

            addForm.reset();
        }
    });

    deleteAdv(advertisement);
    makeChanges();
});

