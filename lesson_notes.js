//цикл while
let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

//цикл do while
let num1 = 50;

do {
    console.log(num1);
    num1++;
}

while (num < 55);

//цикл for
for (let i = 1; i < 10; i++) {
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}

// do while
// let films = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');
//     films++;

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error!');
//         films--;
//     }
// }
// while (films < 2)

// //while
// let films = 1;
// while (films < 3) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');
//     films++;

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');

//     } else {
//         console.log('Error!');
//         films--;
//     }
// }