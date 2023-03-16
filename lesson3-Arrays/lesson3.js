const clients = ["Mango", "Ajax", "Poly"];
for (const client of clients) {
  console.log(client);
}
//

const string = "javascript";
for (const character of string) {
  console.log(character);
}
//
/*

const clients = [
  "Mango",
  "Poly",
  "Ajax",
  "Tom",
  "Alice",
  "Olivia",
  "Max",
  "Alice",
  "Emily",
  "Tim",
];
const nameToFind = "Tom";
let message = "Клиент с таким именем есть в базе данных!";
for (const client of clients) {
  console.log(client);
  if (client === nameToFind) {
    console.log(message);
    break;
  }
}
 */

const friends = ["Mango", "Kivi", "Ajax", "Poly"];
console.log(friends);
const lastIndex = friends.length - 1;
for (let i = 0; i <= lastIndex; i += 1) {
  console.log(friends[i]);
  friends[i] += "+1";
}
console.table(friends);

//
const carts = [1, 3, 14, 18, 4, 7, 29, 6, 34];
let sum = 0;
for (let i = 0; i < carts.length; i += 1) {
  console.log(carts[i]);
  sum += carts[i];
}
console.log("sum=", sum);
// ТОЖЕ САМОЕ:
const carts = [1, 3, 14, 18, 4, 7, 29, 6, 34];
let sum = 0;
for (const cart of carts) {
  sum = sum + cart;
}
console.log(sum);

//

const numbers = [1, 3, 14, 18, 4, 7, 29, 33, 6, 34];
let total = 0;
for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
  if (numbers[i] % 2 !== 0) {
    continue;
  }
  total += numbers[i];
}
console.log("sum:", total);
// ТОЖЕ САМОЕ:
const numbers = [1, 3, 14, 18, 4, 7, 29, 33, 6, 34];
let total = 0;
for (number of numbers) {
  console.log(number);
  if (number % 2 === 0) {
    total += number;
  }
}
console.log("sum:", total);

//
const friends = ["Mango", "Kivi", "Ajax", "Poly"];
for (const friend of friends) {
  friend += "-1";
}
console.log(friends);

//
const friends = ["Mango", "Kivi", "Ajax", "Poly"];
for (const friend of friends) {
  console.log(friend);
}
console.log(friends);
// Mango
// Kivi
// Ajax
// Poly
// (4) ['Mango', 'Kivi', 'Ajax', 'Poly']

//
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;
// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }
  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}

//

// Выносим варианты в массив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
// Проверяем наличие элемента
const hasFruit = redFruits.includes(fruit);
if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}

//

// найти скрипт поиска логина:
const logins = ["m4ngoDoge", "kiwidab3st", "polyiscute", "aj4xth3m4n"];
const loginToFind = "polyiscute";
let message = "";
for (let i = 0; i < logins.length; i += 1) {
  const login = logins[i];
  if (login === loginToFind) {
    message = `Пользователь ${loginToFind} найден.`;
    break;
  }
  message = `Пользователь ${loginToFind} не найден.`;
}
console.log(message);
//// ТОЖЕ САМОЕ:
const logins = ["m4ngoDoge", "kiwidab3st", "polyiscute", "aj4xth3m4n"];
const loginToFind = "polyiscute";
let message = `Пользователь ${loginToFind} не найден.`;
for (const login of logins) {
  if (login === loginToFind) {
    message = `Пользователь ${loginToFind} найден.`;
    break;
  }
}
console.log(message);
//// ТОЖЕ САМОЕ:
const logins = ["m4ngoDoge", "kiwidab3st", "polyiscute", "aj4xth3m4n"];
const loginToFind = "polyiscute";
const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;

console.log(message);

//
// скрипт поиска самого маленького числа из массива
const numbers = [51, 23, 14, 18, 4, 7, 29, 6, 34];
let smallestNumber = numbers[0]; // присваиваем первое массива

console.log(smallestNumber);

for (const number of numbers) {
  console.log(number);
  if (number < smallestNumber) {
    //сравниваем переменную с итералом
    smallestNumber = number; // если верно- присваивам новое значение
  }
}
console.log("smallestNumber=", smallestNumber);

// массив преобразовать в строку СЛОЖНО:
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (const friend of friends) {
  string += friend + ",";
}
string = string.slice(0, string.length - 1);
console.log(string);
// Должно получиться 'Mango,Poly,Kiwi,Ajax'
// // массив преобразовать в строку ПРОСТО:
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
const string = friends.join(",");
console.log(string);

// скрипт который заменяет регистр каждого символа на противоположный
const string = "JavaScript";
const letters = string.split("");
let invertedString = "";
console.log(letters);
for (const letter of letters) {
  console.log(letter);
  if (letter === letter.toLowerCase()) {
    console.log("этa буква в нижнем регистре!!! - ", letter);

    invertedString += letter.toUpperCase();
  } else {
    console.log("Эта буква в верхнет регистре!!! - ", letter);
    invertedString += letter.toLowerCase();
    letter;
  }
}
console.log(invertedString);
// ТОЖЕ САМОЕ ЧЕРЕЗ ТЕРНАРНИК
const string = "JavaScript";
const letters = string.split("");
let invertedString = "";
console.log(letters);
for (const letter of letters) {
  console.log(letter);

  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}
console.log(invertedString);

// делаем slug в URL из названия статьи (Заголовок статьи состоит только из букв и пробелов)
const title = "Top 10 benefits of React framework";
const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);
const words = normalizedTitle.split(" ");
console.log(words);
const slug = words.join("-");
console.log(slug);
// быстрый вариант
const slug1 = title.toLowerCase().split(" ").join("-");
console.log(slug1);

//
// посчитать сумму элементов двух массивов
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;
for (let i = 0; i < array1.length; i += 1) {
  total += array1[i];
}
for (let i = 0; i < array2.length; i += 1) {
  total += array2[i];
}
console.log(total);
//тоже самое
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;
const numbers = array1.concat(array2); //соединяем в один массив
for (const number of numbers) {
  total += number; //суммируем все элементы
}
console.log(total);

// удаление/добавление эдемента
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
console.table(cards);
// Удаление (по индексу), метод indexOf()
const cardToRemove = "Карточка-3";
const index = cards.indexOf(cardToRemove);
console.log(index);
cards.splice(index, 1);
console.table(cards);

// Добавление (по индексу)
const cardToInsert = "Карточка-6";
const indexNew = 3;
cards.splice(indexNew, 0, cardToInsert);
console.table(cards);

// обновление (по индексу)
const cardToUpdate = "Карточка-7";
cards.splice(1, 1, cardToUpdate); //меняем карточку-2 на карточку-7
console.table(cards);

// Является ли слово ПАЛИНДРОМОМ
const string = "TENET";
console.log(string);
const reversString = string.split("").reverse().join("");
console.log(reversString);
if (string === reversString) {
  console.log("да это палиндром");
} else {
  console.log("нет это не палиндром");
}
