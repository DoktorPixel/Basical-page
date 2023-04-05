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

// // // 13. Object.keys
// // //  Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
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
