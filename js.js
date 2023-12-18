"use strict";
// function check(str, supstr){
//     const regExs=new RegExp(supstr)
//     return regExs.test(str)
// }
// console.log(check('i love you', 'love'))

//Flag
//i
// console.log(/love/i.test('i LOVE you'))
//g
// console.log('i love Love you'.match(/love/ig))
//m
// const str=`
// 1 строка
// 2 строка
// 3 строка
// `
// console.log(str.match(/^\d/mg))

//method
//regExp.text(str)- true or false в зависимости от вхожденных элементов
// str.replace(redExp, str2)-заменяет на вхожденный элемент на str2
// console.log('I love you'.replace('love', 'life'))

//буквенные классы
// \d- любая одна цифра
// \w- любая одна латинская буква цифра или нижнее подчеркивание
// \s- один пробел
// \b - граница слова
// \D - все что угодно кроме цифр
// \W - все кроме \w
// \S - все кроме \s
// . - любой символ кроме \n
// console.log(/\d\d\d/.test('13декабря'))

// якорь
//^ - начало строки
//$- конец строки
//console.log(/\d\d$/.test('13декабря'))

//пропус спец символов
// ] \ ^ $ () . | ? * + -
//const test = new RegExp('\\^\\$\\.','i')
//console.log(test.test('^$.'))

// наборы и диапозоны
//[abc]- любой из этих символов
//[0-9]- любой из этих цифр 0-9
//[a-z]- любая буква от а до z
// [A-Z]-любая буква от A до Z
//[0-9a-zA-Z]- выведет все что в диапозонах
//[А-Я]
//[^a-z]-все что угодно кроме от a-z
//[^0-9]-все что угодно кроме от 0-9
//искл
// 1. пишуться без экранирование[. + ()]
// 2. не экранирование в начале[-]
// 3. обяз не экранируются в начале[^]
// 4. экранируются  всегда[]]

// квантификаторы
//{n}- точное количество элементов
//{n1, n2}- от n1 до n2
//{n1, }-плавающие количество миниму n1
//console.log('18122023'.match(/\d{1,3}/))
//сокращения: + ={1,}
//? ={0,1}
//* ={0,}
//console.log('18122023'.match(/\d+/))

//Жадные и ленивые алгоритмы
//console.log('i "love" or "like" you'.match(/".+?"/g))
//?- выключает режим лени

//группа захвата
//console.log(/(go)/.test('gogo'))
//()-позваляют квантифицировать некоторые выражения
//console.log('i love you'.match(/(lo)(ve)/))
//
//оператор или or
//console.log('i love sql'.match(/html|sql|php/))
//
//
//let input= '    info    '
//console.log(input.match(/\S+/gi))

let int='i                                      love                                                   you              '
console.log(int.replace(/\s+/g, ' '))