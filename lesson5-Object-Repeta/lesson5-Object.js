// // // Методы объектов:
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// // // Массив обьектов:
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
  {
    title: "Сон смешного человека",
    author: "Федор Достоевский",
    rating: 7.75,
  },
];
// Для перебора такого массива используется стандартный цикл for...of
for (const book of books) {
  console.log(book); // Объект книги
  console.log(book.title); // Название
  console.log(book.author); // Автор
  console.log(book.rating); // Рейтинг
}
// Например, получим список названий всех книг в коллекции books
const bookNames = [];
for (const book of books) {
  bookNames.push(book.title);
}
console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]
// Узнаем средний рейтинг всей нашей коллекции:
let totalRating = 0;
for (const book of books) {
  totalRating += book.rating;
}
const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2

// // // // // // // // // // // // // // Репета урок 1
// // // // // // // // // // // // // // Основы
const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  trackCount: 3,
};
console.log(playlist); // {name: 'Мой супер плейлист', rating: 5, tracks: Array(3), trackCount: 3}
console.log(playlist.tracks); // ['трек-1', 'трек-2', 'трек-3']

const propertyName = "tracks";

console.log(playlist.propertyName); //undefined   -нет такого свойства
console.log(playlist[propertyName]); // ['трек-1', 'трек-2', 'трек-3']

// // //
/* Короткая запись свойств */
const username = "Mango";
const email = "mango@mail.com";

const signupData = {
  username,
  email,
};
console.log(signupData); // {username: 'Mango', email: 'mango@mail.com'}

// // //
/* Вычисляемые свойства */
// <input name="color" value="tomato" >

const inputName = "color";
const inputValue = "tomato";

const colorPickerData = {
  [inputName]: inputValue,
};
console.log(colorPickerData); // {color: 'tomato'}
// // //

/* Ссылочный тип {} === {} */

console.log({ a: 1 } === { a: 1 }); //false
console.log([] === []); //false

const a = { x: 1, y: 2 };
const b = a;

console.log(b === a); //true

// // // // // // // // // // // // // // Методы объектов
/* Методы объекта и this при обращении к свойствам в методах
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */
const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  changeName(newName) {
    console.log("this внутри changeName: ", this);

    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist.getTrackCount());

playlist.changeName("Новое имя");

playlist.addTrack("новый трек 1");
console.log(playlist.getTrackCount());

playlist.addTrack("новый трек 2");
console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist);

// // // // // // // // // // // // // // Перебор объектов:
/* Перебор через for...in и Object.keys|values|entries */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};
let totalFeedback = 0;
const keys = Object.keys(feedback);
console.log(keys); // ['good', 'neutral', 'bad']

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);

  totalFeedback += feedback[key];
}
console.log("totalFeedback: ", totalFeedback);

const values = Object.values(feedback);

console.log(values); // [5, 10, 3]

for (const value of values) {
  console.log(value);

  totalFeedback += value;
}

console.log("totalFeedback: ", totalFeedback); // totalFeedback:  18

// // // // // // // // // // // // // // //Добавляет примеры по обьектам
/* Работа с коллекцией (массивом объектов) */
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

console.table(friends);

/* Ищем друга по имени   */
const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.name);

    if (friend.name === friendName) {
      return "НАШЛИ!!!";
    }
  }
  return "НЕ НАШЛИ :(";
};
console.log(findFriendByName(friends, "Poly"));
console.log(findFriendByName(friends, "Chelsy"));

/* Получаем имена всех друзей */
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];
const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend.name);
    names.push(friend.name);
  }
  return names;
};
console.log(getAllNames(friends)); //['Mango', 'Kiwi', 'Poly', 'Ajax']

/* Получаем имена только друзей которые онлайн */
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};
console.log(getOnlineFriends(friends));

/* Получаем имена только друзей которые не онлайн */
const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      //не онлайн
      offlineFriends.push(friend);
    }
  }
  return offlineFriends;
};
console.log(getOfflineFriends(friends));

/*создать 2 массива онлайн и офлайн?
если тру - в первый, если нет - во второй */
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];
const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }
    friendsByStatus.offline.push(friend);
    // или:
    // const key = friend.online ? "online" : "offline";
    // friendsByStatus[key].push(friend);
  }
  return friendsByStatus;
};
console.log(getFriendsByStatus(friends));
