// 1. Объявление параметров x, y, z
function multiply(x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
}

// 2. Передача аргументов
multiply(2, 3, 5); // Результат умножения равен 30
multiply(4, 8, 12); // Результат умножения равен 384
multiply(17, 6, 25); // Результат умножения равен 2550

// // //

function multiply(x, y, z) {
  console.log("Код до return выполняется как обычно");
  // Возвращаем результат выражения умножения
  return x * y * z;
  console.log("Этот лог никогда не выполнится, он стоит после return");
}
// Результат работы функции можно сохранить в переменную
let result = multiply(2, 3, 5);
console.log(result); // 30
result = multiply(4, 8, 12);
console.log(result); // 384
result = multiply(17, 6, 25);
console.log(result); // 2550

// // //
// Параметры по умолчанию
function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}
count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(); // countFrom = 0, countTo = 10, step = 1

// // //
// Псевдомассив arguments
function multiply() {
  let total = 1;
  for (const argument of arguments) {
    total *= argument;
  }
  return total;
}
console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120
// arguments - специальная переменная, которая доступна только внутри функции и хранит все аргументы как псевдомассив

// // //
function fn() {
  // В переменной args будет полноценный массив
  const args = Array.from(arguments);
}

// // //
function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля");
  } else if (amount > balance) {
    console.log("Недостаточно средств на счету");
  } else {
    console.log("Операция снятия средств проведена успешно");
  }
}
withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
withdraw(500, 300); // "Недостаточно средств на счету"
withdraw(100, 300); // "Операция снятия средств проведена успешно"
// same abow
function withdraw(amount, balance) {
  // Если  условие выполняется, вызывается console.log
  // и выход из функции. Код идущий после тела if не выполнится.
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля");
    return;
  }
  // Если условие первого if не выполнилось, его тело пропускается
  // и интерпретатор доходит до второго if.
  // Если условие выполняется, вызывается console.log и выход из функции.
  // Код идущий после тела if  не выполнится.
  if (amount > balance) {
    console.log("Недостаточно средств на счету");
    return;
  }
  // Если ни один из предыдущих if не выполнился,
  // интерпретатор доходит до этого кода и выполняет его.
  console.log("Операция снятия средств проведена");
}
withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
withdraw(500, 300); // "Недостаточно средств на счету"
withdraw(100, 300); // "Операция снятия средств проведена"

// // //

// Объявление функции (function declaration)
function multiply(x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
}
// Функциональное выражение (function expression)
const multiply = function (x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
};

// // //

// ❌ Ошибка! Не работает вызов до объявления
multiply(1, 2, 3);
const multiply = function (x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
};
// ✅ Работает вызов после объявления
multiply(4, 5, 6);

// // //

const calculateTotalPrice = function (items) {
  console.log("items внутри функции: ", items);
  let total = 0;
  for (const item of items) {
    total += item;
  }
  return total;
};
console.log(calculateTotalPrice([5, 10, 15, 20, 1000])); // 1050
console.log(calculateTotalPrice([100, 200, 300])); // 600
const r1 = calculateTotalPrice([1, 2, 3, 4, 5]);
console.log(`общая стоимость покупок ${r1}`);

// // //

/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */
const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};
logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
logItems([1, 2, 3, 4, 5]);
logItems(["клавиатура", "наушники", "часы"]);

// // //
/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */
const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
//              подробная запись:
// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден.`;
//     }
//   }
//   return `Пользователь ${loginToFind} не найден.`;
// };
//               короткая запись:
const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;
};
console.log(findLogin(logins, "avocod3r")); //Пользователь avocod3r не найден.
console.log(findLogin(logins, "k1widab3st")); //Пользователь k1widab3st найден.
console.log(findLogin(logins, "jam4l")); //Пользователь jam4l не найден.
console.log(findLogin(logins, "poly1scute")); //Пользователь poly1scute найден.

// // //
/* Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */
const findSmallesNumber = function (numbers) {
  let smallestNumber = numbers[0];
  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
};
console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// // //
/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */
const changeCase = function (string) {
  const letters = string.split("");
  let invertedString = "";

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();
    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};
console.log(changeCase("qweRTY")); // QWErty
console.log(changeCase("mAnGo")); // MaNgO
console.log(changeCase("AjAx")); // aJaX

// // //

/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

const slugify = function (string) {
  // const normalizedString = string.toLowerCase();
  // const words = normalizedString.split(' ');
  // const slug = words.join('-');
  // return slug;

  return string.toLowerCase().split(' ').join('-');
};

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));

// // //

function filterArray(numbers, value) {
  const a = [];

  for (let index = 0; index < 10; index++) {
    a.push("");
  }
  return numbers.filter((item) => item > value);
}

function calcBMI(weight, height) {
  const normalizedWeight = weight.replace(",", ".");
  const normalizedHeight = height.replace(",", ".");
  let result = NparseFloat(weight) / parsFloat(height) ** 2;
  return Math.ceil(result);
}
const bmi = calcBMI("88.3", "1.75");
console.log(bmi); // 28.8
