// "use strict";

// let number = 4.6;

// console.log(-4/0);
// console.log("string"*2);

// const person = "Alex "; 

// const bool = true;

// console.log(something); //null

// let und;
// console.log(und);

// const obj = {
// 	name: "Ivan",
// 	age: 25,
// 	isMarried: false,
// };

// console.log(obj.isMarried);
// console.log(obj["name"]);

// let arr = [12, "plum.png", "prange.jpg", "apple.bmp", {}, []];
// console.log(arr[4]);

// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Are you older than 18?", "18");
// console.log( answer + 23 );

// const answers = [];

// answers[0] = prompt("What is your name?", '');
// answers[1] = prompt("What is your surname?", '');
// answers[2] = prompt("How old are you?", '');

// console.log(typeof(answers));
// console.log(typeof(null));


// const category = "toys";
// console.log(`https://someurl.com/${category}/5`);
// const user = "Ivan";
// alert(`Hello, ${user}`);

// console.log(4 + /*+*/parseInt("5"));

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);

// console.log(2 + 2 * 4 === "8");

// // &&
// // ||

// const isChecked = true,
//       isClose = false;

// console.log(isChecked && isClose && true);
// console.log(!isChecked || isClose);

// console.log(2 + 2 * 2 !== '6');

// if (4) {
//     console.log("OK!");
// } else {
//     console.log("Error");
// }

// const num = 51;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100){
//     console.log("too much");
// } else {
//     console.log('OK!');
// }

// num === 50 ? console.log('OK!') : console.log("Error");

// switch (num) {
//     case 49:
//         console.log("Incorrect");
//         break;
//     case 100: 
//         console.log("Incorrect");
//         break;
//     case 50:
//         console.log("Correctly");
//         break;
//     default:
//         console.log("Inncorect");
//         break;
// }

// let num = 50;

// // // // while (num <= 55) {
// // // //     console.log(num);
// // // //     num++;
// // // // }

// // // // do {
// // // //     console.log(num);
// // // //     num++;
// // // // } while (num <= 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6){
//         // break;
//         continue;
//     }
//     console.log(i);
// }
// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }
//
// showFirstMessage("Hello World");
// console.log(num);
//
// function calc(a, b) {
//     return a + b;
// }

// console.log(calc(2, 4));
// console.log(calc(3, 45));
// console.log(calc(6, 36));

// const anotherNum = ret();
// console.log(anotherNum);
//
// function ret() {
//     let num = 50;
//     return num;
// }

// const logger = function () {
//     console.log("Hello");
// };
//
// logger();
//
// const calc = (a, b) => a + b;


// --------------

// const str = "test";
// const arr = [1, 2, 3];

// console.log(arr.length);
// console.log(str.length);
//
// console.dir(Number);
//
// console.log(str[2]);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";
// console.log(fruit.indexOf("q"));
//
// const logg = "Hello World";
// console.log(logg.slice(6, 11));
// console.log(logg.slice(9));
// console.log(logg.slice(-6, -1));
//
// console.log(logg.substring(6, 11));
//
// console.log(logg.substr(0, 5));

// const num = 12.2;
//
// console.log(Math.round(num));
//
// const test  = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// function first () {
//     //Do Something
//     setTimeout( function (){
//         console.log(1);
//     }, 500);
// }
//
// function second() {
//     console.log(2);
// }
//
// first();
// second();
//
// function learnJS(lang, callback) {
//     console.log(` I learn: ${lang}`);
//     callback();
// }
//
// function done() {
//     console.log("I studied that lesson");
// }
//
// learnJS("JAvaScript", done);

// ---------------------------

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red",
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };

// console.log(options["colors"]["bg"]);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (const key in options) {
//     if (typeof options[key] === 'object') {
//         counter++;
//         for (const i in options[key]) {
//             console.log(`Property ${i}, has value ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Property ${key}, has value ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options).length); //write in notebook

// options.makeTest();

// const {border, bg} = options.colors; //деструктиризация
// console.log(border);

//---------------------------------

// const arr = [1, 2, 4, 10, -1, 0];

// arr.pop(); //delete last element
// arr.push(10);
//
// // console.log(arr);
//
// // for ( let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
//
// for (const value of arr) {
//     console.log(value);
// }
//
// arr[99] = 0;
// console.log(arr.length); //length = last i of arr + 1

// arr.forEach(function (item, index, array){
//     console.log(`${index}: ${item} inner array ${array}`);
// })

// const str = prompt('', '');
// const  products = str.split(',');
// console.log(arr.sort(compareNum));
//
// function compareNum (a, b) {
//     return a - b;
// }
// console.log(products.join(':'));

// delete arr[2];
// console.log(arr);

// ------------------------

// let a = 5,
//     b = a;
//
// b = b + 5;
//
// console.log(b);
// console.log(a);
//
// const obj = {
//     a: 5,
//     b: 1,
// };
//
// const copy = obj; //link
//
// copy.a = 10;
//
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//
//     for (key in mainObj) {
//         if (typeof mainObj[key] === 'object') {
//             objCopy[key] = copy(mainObj[key]);
//         } else {
//             objCopy[key] = mainObj[key];
//         }
//     }
//
//
//     return objCopy;
// }
//
// const numbers = {
//     a: 3,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     }
// };
//
// const newNumbers = copy(numbers);
//
// newNumbers.a = 100;
// newNumbers.c.y = 7;
//
// console.log(newNumbers);
// console.log(numbers);
//
// const add = {
//     d: 17,
//     e: 20
// };
//
// const clone = Object.assign({}, add);
//
// clone.d = 20;
//
// console.log(clone, add);
//
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[2] = 2;
//
// console.log(newArray, oldArray);
//
// const video = ['youtube', 'vimeo', 'rutuve'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
//
// console.log(internet);
//
// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// const num = [2, 4, 5];
//
// log(...num);
//
// const array = ['a', 'b'];
//
// const newArray2 = [...array];
//
// newArray2[1] = 's';
//
// console.log(newArray2, array);
//
// const g = {
//     one: 1,
//     two: 2,
// };
// const newObj = {...g};
// newObj.one = 11;
// console.log(newObj, g);

// --------------------------------------

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));
//
// console.dir([1, 2, 4, 5]);
//
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('hello');
//     }
// };

// const john = {
//     health: 100,
// };

// john.__proto__= soldier; //deprecated format
// Object.setPrototypeOf(john, soldier); //new format

// const john = Object.create(soldier);
//
// console.log(john);
// john.sayHello();
//
// --------------------------------------

// To string

// 1 function String
// console.log(typeof String(null));
// console.log(String(4));

// 2 concatenation зчеплення
// console.log(typeof (5 + ""));
//
// const num = 5;
// console.log('https://vk.com/catalog/' + num);
//
// const fontSize = 26 + "px";

// To number

// 1 function Number
// console.log(typeof (Number("4")));

// 2 plus
// console.log(typeof (+"4"));

// 3 parseInt or parseFloat
// console.log(parseInt("15px"));

// let answ = +prompt("Hello", "");


// To Boolean

// 0, "", undefined, null, NaN - will be always false

// first native way
// let switcher = null;
// if (switcher) {
//     console.log("Working...");
// }

// switcher = 1;
// if (switcher) {
//     console.log("Working...");
// }

// 2) function Boolean
// console.log(typeof Boolean("4"));

// 3 two operators not
// console.log(typeof (!!"444444"));

// -----------------------------------------------------

// const box = document.getElementById("square"),
//     btns = document.getElementsByTagName("button"),
//     circles = document.getElementsByClassName("circle"),
//     wrapper = document.querySelector('.wrapper'),
//     hearts = wrapper.querySelectorAll(".heart"),
//     oneHeart = wrapper.querySelector(".heart");

// const box = document.getElementById('square');
// console.log(box);
//
// const buttons = document.getElementsByTagName("button")[1];
// console.log(buttons);
//
// const circles = document.getElementsByClassName('circle');
// console.log(circles);
//
// const hearts = document.querySelectorAll(".heart");
// console.log(hearts);
//
// hearts.forEach(item => {
//     console.log(item);
// });
//
// const oneHeart = document.querySelector(".heart");
// console.log(oneHeart);

// -----------------------------------------------------------------

// console.dir(box);
//
// box.style.backgroundColor = "purple";
// box.style.width = '320px';
// box.style.cssText = "background-color: blue; width: 500px";
//
// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// first way
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

// second
// hearts.forEach(item => {
//    item.style.backgroundColor = 'blue';
// });

// third
// for (const heart of hearts) {
//     heart.style.backgroundColor = "red";
// }

// const div = document.createElement('div');
// const text  = document.createTextNode("Here am I");

// div.classList.add("black");

// document.body.append(div);
// wrapper.appendChild(div); //old
// wrapper.append(div);
// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[2]); //old


// circles[0].remove();
// wrapper.removeChild(hearts[1]); //old
// console.log(circles);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); //old

// div.style.color = "white";
// div.innerHTML = `Hello world`;
// div.innerHTML = `<h1>Hello world</h1>`;
// div.textContent = "Hello";
// div.textContent = "<p>Hello</p>";

// div.insertAdjacentHTML(
//     "beforebegin",
//     "<h2>Hello</h2>"
// );

// -------------------------------------------------------------

// const btn = document.querySelector(".button"),
//     overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert("click");
// };
//
// btn.onclick = function () {
//     alert("Second click");
// };

// btn.addEventListener("click", function () {
//     alert("click");
// });

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.currentTarget);
//     console.log(e.type);
//     // i++;
//     // if (i === 1) {
//     //     btn.removeEventListener('click', deleteElement);
//     // }
// };
//
// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);
//
// const link = document.querySelector("a");
//
// link.addEventListener("click", ev => {
//     ev.preventDefault();
//
//     console.log(ev.target);
// });

// const btns = document.querySelectorAll('.button');
// btns.forEach(item => {
//     item.addEventListener("click", e => {
//         console.log(e.target);
//     }, {once: true});
// });

// --------------------------------------------------------

// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);


// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector("[data-current = '3']").nextSibling);
// console.log(document.querySelector("[data-current = '3']").nextElementSibling);

// console.log(document.querySelector("[data-current = '3']").previousSibling);
// console.log(document.querySelector("[data-current = '3']").previousElementSibling);
//
// for (const node of document.body.childNodes) {
//     if (node.nodeName === "#text") {
//         continue;
//     }
//     console.log(node);
// }
// console.log(document.body.children);

// --------------------------------------------------------

// events on smartphones

// events:
// touchstart - спрацьовує при дотику до елемента
// touchmove - коли палець при дотику починає рухатись
// touchend - коли палець відірвався від елемента
// touchenter - коли ведемо пальцем по екрану і натрапляємо на межі необхідного об'єкта
// touchleave - коли палець рухається по екрану і виходить за межі об'єкта
// touchcancel - коли тач виходить за межі мобільного браузера

// window.addEventListener('DOMContentLoaded', () => {
//    const box = document.querySelector(".red-square");
//
//    box.addEventListener("touchstart", (e) => {
//        e.preventDefault();
//
//        console.log('start');
//        console.log(e.targetTouches);
//    });
//
//     box.addEventListener("touchmove", (e) => {
//         e.preventDefault();
//
//         console.log(e.targetTouches[0].pageX);
//     });
//
//     box.addEventListener("touchend", (e) => {
//         e.preventDefault();
//
//         console.log('end');
//     });
// });

// e.touches - видає список всіх пальців, які на даний момент взаємодіють з екраном
// e.targetTouches - видає список всіх пальців, які взаємодіють з даний елементом
// e.changedTouches - список пальців, які беруть участь в даній події

// ------------------------------------------------------------

// alert('defer');