// todo Базові операції з масивом
/*
 * Створіть масив genres з елементами Jazz і Blues.✅
 * Додайте "Рок-н-рол" в кінець.✅
 * Виведіть у консоль перший елемент масиву.✅
 * Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.✅
 * Видаліть перший елемент і виведіть його в консоль.✅
 * Вставте «Country» та «Raggy» на початок масиву.
 */
const genres = ["Jazz", "Blues"];
genres.push("Рок-н-рол");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
console.log(genres.shift());
genres.unshift("Country", "Raggy");
console.log(genres);

////////////////////////////////////////////////////////////////////////////////////////
// todo Масиви та рядки
/*
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */
const values = "8 11";
const numbers = values.split(" ");
const a = Number(numbers[0]);
const b = Number(numbers[1]);

const area = a * b;
console.log(area);

////////////////////////////////////////////////////////////////////////////////////////
// todo Перебір масиву
/*
 * Напиши скрипт для перебору масиву fruits циклом for.
 * Для кожного елемента масиву виведіть у консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів має починатися з першого.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i];

  console.log(`${i + 1} - ${fruit}`);
}
// // // // same abowe
let index = 0;
for (const fruit of fruits) {
  console.log(`${(index += 1)} - ${fruit}`);
}
// // //same abowe
for (const fruit of fruits) {
  console.log(`${fruits.indexOf(fruit) + 1} - ${fruit}`);
}

////////////////////////////////////////////////////////////////////////////////////////
// todo Масиви та цикли
/*
 * Напиши скрипт який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
 * Порядковий номер імен та телефонів у рядках вказують на відповідність.
 * Кількість імен та телефонів гарантовано однакова.
 */

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

const namesArr = names.split(",");
const phonesArr = phones.split(",");

for (let i = 0; i < namesArr.length; i += 1) {
  const name = namesArr[i];
  const phone = phonesArr[i];

  console.log(`${i + 1}: ${name} - ${phone}`);
}
////////////////////////////////////////////////////////////////////////////////////////
// todo Масиви та рядки
/*
 * Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього.
 * Результуючий рядок не повинен починатися або закінчуватися пробілом.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas cupiditate excepturi";

const array = string.split(" ");
console.log(array);
array.splice(0, 1);
array.splice(array.length - 1, 1);

console.log(array.join(" "));
////////////////////////////////////////////////////////////////////////////////////////
// todo Масиви та рядки
/*
 * Напиши скрипт, який «розвертає» рядок (зворотний порядок літер) і виводить його в консоль.
 */

const string = "Welcome to the future";

const array = string.split("");
const reversedArray = array.reverse();
const newString = reversedArray.join("");

console.log(newString);
// // // //
console.log(string.split("").reverse().join(""));

let newString = "";

for (let i = string.length - 1; i >= 0; i -= 1) {
  const letter = string[i];

  newString += letter;
}

console.log(newString);
////////////////////////////////////////////////////////////////////////////////////////
// todo Пошук елемента
/*
 * Напиши скрипт пошуку найменшого числа в масиві.
 * Код має працювати для будь-якого масиву чисел.
 * Використовуйте цикл для вирішення задачі.
 */

const numbers = [2, 17, 94, 1, 23, 37, 0, -5]; // -5
let minElement = numbers[0];

for (const number of numbers) {
  if (minElement > number) {
    minElement = number;
  }
}

console.log(minElement);
////////////////////////////////////////////////////////////////////////////////////////
// todo

/*
 * Напиши скрипт, який просить відвідувача ввести число у prompt до тих пір,
 * поки відвідувач не натисне Cancel та щоразу додає введене значення до загальної суми.
 * При завантаженні сторінки користувачеві пропонується в prompt ввести число.
 * Введення додається до значення змінної total.
 * Операція введення числа триває доти, доки користувач не натисне кнопку Cancel у prompt.
 * Після того, як користувач припинив введення, натиснувши кнопку Cancel,
 * показати alert з рядком 'Загальна сума чисел дорівнює [сума]'.
 * Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не потрібно.
 * Якщо хочеш, у разі некоректного введення, показуй alert з текстом 'Було введено не число, спробуйте ще раз',
 * при цьому результат prompt плюсувати до загальної суми не потрібно,
 * після чого користувачеві знову пропонується ввести число в prompt.
 */

let userInput;
let total = 0;

for (;;) {
  userInput = prompt("Введіть число", 10);

  if (userInput === null) {
    break;
  }

  if (isNaN(Number(userInput))) {
    alert("Було введено не число, спробуйте ще раз");
    continue;
  }

  total += Number(userInput);
}

console.log(`Загальна сума чисел дорівнює ${total}`);
