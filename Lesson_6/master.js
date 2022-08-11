// - Знайти та вивести довижину настипних стрінгових значень
let a = 'hello wWorld'
let b = 'lorem ipsum'
let c = 'javascript is cool'
let length_str = (...value) => {
    for (const valueElement of value) {
        console.log(valueElement.length)
    }
}
//length_str(a,b,c)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let d = 'hello world,LOREM IPSUM,AAxxPP'

function intermedia_case(arr) {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === arr[i]) {
            new_arr.push(arr[i] = arr[i].toUpperCase())
        } else {
            new_arr.push(arr[i] = arr[i].toLowerCase())
        }
    }
    return new_arr.join('')
}
// console.log(intermedia_case(d));


// - Є "брудна" стрінга. Почистити її від зайвих пробілів.
let str = ' dirty string   '
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str2 = 'Ревуть воли як ясла повні';
let arr =str2.split(' ')
// console.log(arr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr2=[10,8,-7,55,987,-1011,0,1050,0];
 let arr3 =arr2.map((value,)=>String(value))
// console.log(arr3);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
   let nums = [11,21,3];

// sortNums(nums,'ascending') // [3,11,21]
nums.sort(function(a, b) {
    return a - b;
});
// console.log(nums);

// sortNums(nums,'descending') // [21,11,3]
nums.sort(function(a, b) {
    return b - a;
});
// console.log(nums);

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray);
let month= coursesAndDurationArray.sort(function(a, b) {
    if (a.monthDuration > b.monthDuration) {
        return 1;
    }
    if (a.monthDuration < b.monthDuration) {
        return -1;
    }

    return 0;
})
console.log(month);
let month1= coursesAndDurationArray.sort(function(a, b) {
    if (b.monthDuration > a.monthDuration) {
        return 1;
    }
    if (b.monthDuration < a.monthDuration) {
        return -1;
    }

    return 0;
})
console.log(month1);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }