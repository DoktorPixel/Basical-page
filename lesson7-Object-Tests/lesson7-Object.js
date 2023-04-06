// // // обращения к соответствующим свойствам обьекта apartment
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line

// // // Второй способ получить доступ к свойству объекта это синтаксис обьект["ключ_свойства"]
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};
// Change code below this line
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Change code above this line

// // // 9. Значением вычисляемого свойства может быть любое валидное выражение.
const emailInputName = 'email';
const passwordInputName = 'password';
const credentials = {
  // Change code below this line
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
  // Change code above this line
};

// // // 10. Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.
const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

// // // 11.рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Spacious apartment in the city center';
apartment.rating = 4;
apartment.price = 2153;
for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
  // Change code above this line
}

// // //12. Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object
function countProps1(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  console.log(propCount);
  // Change code above this line
  return propCount;
}
countProps1({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3

// // //  Object.keys
// // // 13. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(apartment[key]);
}
console.log(keys); //(3) ['descr', 'rating', 'price']
console.log(values); //(3) ['Spacious apartment in the city center', 4, 2153]

// // //14. Выполни рефакторинг функции countProps(object) используя метод Object.keys()
function countProps(object) {
  const keys = Object.keys(object);
  // Change code below this line
  let propCount = keys.length;

  return propCount;
  // Change code above this line
}

// // // 15. Используй методы Object.keys() и Object.values().
const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

// // // 16. Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const salaryArr = Object.values(salaries);
  for (const salary of salaryArr) {
    totalSalary += salary;
  }
  // Change code above this line
  return totalSalary;
}

// // // 17. Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

// // // 18.Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}
console.log(getProductPrice('Radar')); //1300

// // // 19. Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let allValues = [];
  for (const product of products) {
    if (propName in product) {
      allValues.push(product[propName]);
    }
  }
  return allValues;
  // Change code above this line
}
console.log(getAllPropValues('name')); // [ 'Radar', 'Scanner', 'Droid', 'Grip' ]

// // // 20. Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];
function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
  // Пиши код выше этой строки
}
console.log(calculateTotalPrice('Grip')); //10800

// // // Деструктуризация
// // // 21.
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// вместо:
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// Change code below this line
const { yesterday, today, tomorrow } = highTemperatures;
// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);

// // // 22. значение по умолчанию
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

// // // 23. При деструктуризации можно изменить имя переменной в которую распаковывается значение свойства.
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// вместо:
// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;
// Change code below this line
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;
// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// // // Для того, чтобы сократить количество повторений, можно деструктуризировать свойства объекта в локальные переменные в теле цикла.
for (const book of books) {
  const { title, author, rating } = book;
  console.log(title);
  console.log(author);
  console.log(rating);
}
// Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной book.
for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

// // // 24. Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
// Change code below this line
// вместо:
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

// // // 25. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// Change code below this line
const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

// // //  Паттерн «Объект настроек» - объект c именованными свойствами.
function doStuffWithBook(book) {
  //some code
} //где:
book = {
  title: 'Последнее королевство',
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  public: true,
};
// тоже самое:
doStuffWithBook({
  title: 'Последнее королевство',
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  public: true,
});

//Ещё один плюс в том, что можно деструктуризировать объект в параметре book.
// Это можно сделать в теле функции:
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, public } = book;
  //some code
}
// тоже самое: // Или в сигнатуре (подписи), разницы нет.
function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
  //some code
}

// // // 26. Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.
// Change code below this line
function calculateMeanTemperature(forecast) {
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  }),
); // 28.5

// // // Синтаксис ... (spread) позволяет распылить коллекцию элементов
//Например, метод Math.max(аргументы) ищет и возвращает самый большой из аргументов (чисел), то есть ожидает не массив значений, а произвольное количество аргументов.
const temps = [14, -4, 25, 8, 11];
// В консоли будет массив
console.log(temps);
// ❌ Так не сработает, потому что передаём целый массив
console.log(Math.max(temps)); // NaN

// В консоли будет набор отдельных чисел
console.log(...temps);
// ✅ Распылим коллекцию элементов как отдельные аргументы
console.log(Math.max(...temps)); // 25

//То есть запись:
Math.max(...[14, -4, 25, 8, 11]);
//после интерпретации превращается в
Math.max(14, -4, 25, 8, 11);

// // // 27. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);
console.log(bestScore); //93
console.log(worstScore); //17

// // // Операция ... spread позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. Раньше для этого использовали методы slice() и concat()
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// // // 28.
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// Операция spread позволяет распылить свойства произвольного количества объектов в один новый. Порядок распыления имеет значение. Имена свойств объекта уникальные, поэтому свойства распыляемого объекта могут перезаписать значение уже существующего свойства, если их имена совпадают.
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// // // 29. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings };

// // // 30. Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
  const newData = { category, priority, ...data, completed };
  return newData;
  // Change code above this line
}
console.log(
  makeTask({
    category: 'Homemade',
    priority: 'Low',
    text: 'Take out the trash',
  }),
); // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// // // Операция ... (rest) позволяет собрать группу независимых элементов в новую коллекцию. Синтаксически это близнец операции распыления, но отличить их просто - распыление это когда ... находится в правой части операции присваивания, а сбор это когда ... находится в её левой части.
// Одна из областей применения операции rest это создание функций которые могут принимать произвольное количество аргументов.
function multiply(...args) {
  //Имя параметра может быть произвольным. Чаще всего его называют args, restArgs или otherArgs, сокращённое от arguments.
  console.log(args); // массив всех аргументов
}
multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

// // // 31. Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
// Change code below this line
function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i += 1) {
    sum += args[i];
  }
  return sum;
  // Change code above this line
}

// // // Операция ... (rest) также позволяет собрать в массив только ту часть аргументов, которая необходима, объявив параметры до «сбора».
function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}
multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

// // // 32. Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции
// Change code below this line
function addOverNum(minNumber, ...args) {
  let total = 0;
  for (const arg of args) {
    if (arg > minNumber) {
      total += arg;
    }
  }
  return total;
  // Change code above this line
}

// // // 32. Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами. Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.
// Change code below this line
// function findMatches(array = [], ...args)
function findMatches(array, ...args) {
  const matches = []; // Don't change this line
  for (let arg of args) {
    if (array.includes(arg)) {
      matches.push(arg);
    }
  }
  // Change code above this line
  return matches;
}
