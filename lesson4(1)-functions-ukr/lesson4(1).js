// todo Індекс маси тіла
/*
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. 
Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.
* Вага та висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
тобто як роздільник дробової частини може бути кома.
* Індекс маси тіла необхідно округлити до однієї цифри після коми;
 */

function calcBMI(weight, height) {
  const normalizedWeight = weight.replace(",", ".");
  const normalizedHeight = height.replace(",", ".");

  let result = parseFloat(normalizedWeight) / parseFloat(normalizedHeight) ** 2;

  return result.toFixed(1);
}

const bmi = calcBMI("88,3", "1.75");
console.log(bmi); // 28.8

// // //

//напиши функцію, яка повертає найменше з чисел
//1:
function minNamber(a = 0, b = 0) {
  if (a < b) {
    return a;
  }
  return b;
}
//2:
function minNamber(a = 0, b = 0) {
  return Math.min(a, b);
}
//3:
function minNamber(a = 0, b = 0) {
  return a < b ? a : b;
}
console.log(minNamber(56, 34));
console.log(minNamber(5, 10));

// // //
// todo Площа прямокутника
/*
 * Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, 
значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.
 */
function getRectArea(dimensions = "1 1") {
  const numbers = dimensions.split(" ");

  const a = Number(numbers[0]);
  const b = Number(numbers[1]);

  return a * b;
}
console.log(getRectArea("8 11"));
console.log(getRectArea("80 31"));
console.log(getRectArea("45 67"));
console.log(getRectArea());

// todo Логування елементів
/*
 * Напиши функцію logItems(items), яка отримує масив і використовує цикл for, який для кожного елемента масиву виводитиме в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів має починатися з першого.

* Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */
function logItems(items = []) {
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];

    console.log(`${i + 1} - ${item}`);
  }
}
logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// todo Логування контактів
/*
 * Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names і phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова
 */
function printContactsInfo(names, phones) {
  const namesArray = names.split(",");
  const phonesArray = phones.split(",");

  for (let i = 0; i < namesArray.length; i += 1) {
    const name = namesArray[i];
    const phone = phonesArray[i];

    console.log(`${name}: ${phone}`);
  }
}
printContactsInfo(
  "Jacob,William,Solomon,Artemis",
  "89001234567,89001112233,890055566377,890055566300"
);

// todo Пошук найбільшого елемента
/*
 * Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.
 */
function findLargestNumber(numbers) {
  let max = numbers[0];

  for (const number of numbers) {
    if (max < number) {
      max = number;
    }
  }
  return max;
}
console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// todo Середнє значення
/*
 * Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.
 */
function calAverage() {
  let total = 0;

  for (const arg of arguments) {
    total += arg;
  }
  return total / arguments.length;
}
console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// todo Форматування часу
/*
 * Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.
 */
function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const convertedHours = hours < 10 ? `0${hours}` : hours;
  const convertedMins = mins < 10 ? `0${mins}` : mins;

  console.log(`${convertedHours} : ${convertedMins}`);
}
console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"

// todo Колекція курсів (includes, indexOf, push тощо)
/*
 * Напишіть функції для роботи з колекцією навчальних курсів courses:

* addCourse(course) - додає курс до кінця колекції
* removeCourse(course) - видаляє курс із колекції
* updateCourse(oldCourse, newCourse) - змінює ім'я на нове
 */
const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

function getUniqueCourse(course) {
  return courses.includes(course);
}

function addCourse(course) {
  if (getUniqueCourse(course)) {
    console.log("Такий курс вже існує");
    return;
  }
  courses.push(course);
}

function removeCourse(course) {
  if (!getUniqueCourse(course)) {
    console.log("Курс не знайдено");
    return;
  }
  for (const name of courses) {
    if (name === course) {
      courses.splice(courses.indexOf(name), 1);
    }
  }
}

function updateCourse(oldName, newName) {
  if (!getUniqueCourse(oldName)) {
    console.log("Курс не знайдено");
    return;
  }
  for (const name of courses) {
    if (name === oldName) {
      courses.splice(courses.indexOf(name), 1, newName);
    }
  }
}

addCourse("Express");
// ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Такий курс вже існує'

removeCourse("React");
// ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse("Vue"); // 'Курс не знайдено'

console.log(updateCourse("Express", "NestJS"));
console.table(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
