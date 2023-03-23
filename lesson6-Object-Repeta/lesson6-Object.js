// Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван,
// соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(numbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // // // // // // // // // // // // // // // // //
/* Операция "..." spread (распыление)
- Array.prototype.concat() и аналог через spread */
const numbers = [1000, ...[1, 2, 3], 5000, ...[4, 5, 6], 7000, ...[7, 8, 9], 9000];
console.log(numbers); // [1000, 1, 2, 3, 5000, 4, 5, 6, 7000, 7, 8, 9, 9000]

// // // без spread (распыление) Math.max/max не работает
const temps = [18, 2, 14, 12, 21, 17, 29, 24];

console.log(Math.max(1, 4, 17, 5, 6)); // 17
console.log(Math.min(temps)); // NaN
console.log(Math.min(...temps)); // 2
console.log(temps); // [18, 2, 14, 12, 21, 17, 29, 24]
/*Операция Math.max/max не работает без оператора распыления, потому что она ожидает аргументы в виде отдельных чисел, а не массива чисел. Если передать массив в Math.max/max, то он будет обрабатываться как один аргумент, что приведет к возвращению NaN.
Используя оператор распыления, мы можем передать элементы массива в качестве отдельных аргументов. */

// // // распыление копирует простые элементы с сслылку на сложные элементы
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

console.log('a: ', a); // a:  (3) [{…}, {…}, {…}]
console.log('b: ', b); // b:  (3) [{…}, {…}, {…}]

console.log(a[0] === b[0]); // true //объекты копированы по ссылке
console.log(a === b); // false // но b новая переменная куда распылили эдементы а

a[0].x = 1000;
console.log('a: ', a); // { x: 1000 }
console.log('b: ', b); // { x: 1000 } // тоже изменилось по ссылке на объект

// // //
/* Сшиваем несколько массивов в один через concat() и spread */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];
// const allTempsConcat = lastWeekTemps.concat(currentTemps, nextWeekTemps)console.log(allTempsConcat); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // //
/* Распыление объектов
- Object.prototype.assign() и spread
Метод Object.assign() используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. */
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
/* старая запись:
const c = Object.assign({name: 'Mango' }, a, b);
console.log(c); // {name: 'Mango', x: 0, y: 2, z: 3} // x- присвоило 1 ипереприсвоило 0  */

/* новая запись:  */
const c = {
  ...a,
  x: 10,
  ...b,
  y: 20,
};
console.log(c); // {x: 0, y: 20, z: 3}

// // //
const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};
const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};
const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};
console.log(finalSettings); // {theme: 'light', showNotifications: false, hideSidebar: true}

// // // // // // // // // // // // // // // // // //
/* Деструктуризация объекта
 - Значения по умолчанию
 - Имя переменной отличное от имени свойства */
const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

const {
  rating,
  tracks,
  name,
  trackCount: numberOfTracks = 0, // можно сделать локальную переменную с другим именем (0-значение по умолчанию)
  author = 'user', //можно добавить значение по умолчанию
} = playlist; // {} стоит слева от =
console.log(numberOfTracks); // 3

// // //
/* Глубокая деструктуризация */
const profile = {
  name1: 'Jacques Gluke',
  tag: 'jgluke',
  location1: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  avatar,
  name1,
  tag,
  location1,
  stats: { followers, views, likes },
} = profile;
console.log(name1, tag, location1, avatar, followers, views, likes);

// // //
/* Деструктуризация массивов */

const rgb = [255, 100, 80];
const [red, green, blue] = rgb;
console.log(red, green, blue); // 255 100 80

// // //

// выбрать самый большой рейтинг из всех авторов:
const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};
// const rating = Object.values(authors);
// console.log(Math.max(...rating)) // 9

const entries = Object.entries(authors);
console.log(entries);

// ур1
// for (const entry of entries){
// const name = entry[0];
// const rating = entry[1];
// console.log(name, rating);}

// ур2
//   for (const entry of entries){
//   const [name, rating] = entry;
//   console.log(name, rating);}

// ур3
for (const [name, rating] of entries) {
  console.log(name, rating);
}

// // //
/* Операция rest (сбор) */
const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
const { name, tag, location, ...restProps } = profile;

console.log(name, tag, location);
console.log(restProps);
console.log(profile);

// // //
/* Паттерн «Обьект настроек»
 - деструктуризация параметра-обьекта в подписи функции
 - rest при деструктуризации в подписи */

const showProfileInfo = function (userProfile) {
  const { name, tag, location, ...restProps } = userProfile;
  console.log(name, tag, location, avatar, followers, views, likes);
  console.log(restProps);
};

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
showProfileInfo(profile);

// // // // // // // // // // // // // // // // // //
// Пример приминения деструктуризации:
const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const makeProfileMarkup = function (userProfile) {
  const {
    avatar = 'https://i.pravatar.cc/400?img=6',
    name,
    tag,
    location = 'Planet Earth',
    stats: { followers, views, likes },
  } = userProfile;

  return `<div>
    <img src="${avatar}" alt="user avatar">
    <p>${name}<span>@${tag}</span></p>
    <p>Location: ${location}</p>
    <ul>
      <li>Followers: ${followers}</li>
      <li>Views: ${views}</li>
      <li>Likes: ${likes}</li>
    </ul>
  </div>`;
};

const markup = makeProfileMarkup(profile);
console.log(markup);
document.body.insertAdjacentHTML('afterbegin', markup);

// // // // // // // // // // // // // // // // // //
/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      if (productName === item.name) {
        console.log('нашли такой продукт ', productName);
        console.log('индекс: ', i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },

  //   countTotalPrice() {
  //     console.log(this.items);
  //     let total = 0;
  //     for (const item of this.items) {
  //       total += item.price;
  //     }
  //     return total;
  //   },

  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍇');
console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());
