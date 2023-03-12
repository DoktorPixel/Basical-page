/* let base=prompt("давай число", "default"); //"default" это коментарий в cтроке ввода
base=Number(base);
console.log(base);


let power=prompt("давай степень");
power = Number(power);
console.log(power);

const result = base ** power;
console.log(result)

 */

/* const max=80;
const min=10;
const result=Math.round(Math.random ()* (max-min)+min);
console.log (result);
 */

/* const colors= ['red','green','orange','deeppink'];
const max=colors.leght-1;
const min=0

const index=Math.round(Math.random()*(max-min)+min);

const color=colors[index];

console.log(color);

document.body.style.backgroundColor =color */

/* const message= 'в этой строке 26 символов.';
console.log(message.length) */

/* const firstName= 'Chelsy';
const lastName= 'Emerald';
const fullName= firstName+' '+ lastName;
console.log(fullName);

console.log('qwe'+'asd');
 */

/* const firstName= 'Chelsy';
const lastName= 'Emerald';
const room= 716;
const typ= 'VIP';
const welcomMsg= 'Гость ' +firstName + ' ' + lastName + ' поселяется в ' +typ + ' номер ' + room;
console.log(welcomMsg);
 */

/* const quantity=5;
const orderMsg = `вы звказываете ${quantity} холодильников`
console.log (orderMsg);

const firstName= 'Chelsy';
const lastName= 'Emerald';
const room= 716;
const typ= 'VIP';
const welcomMsg= `Гость ${firstName} ${lastName} поселяется в ${typ} номер ${room}` ;
console.log (welcomMsg);

 */

/* let brand = 'Samsung';
brand =  brand.toLocaleLowerCase();
console.log(brand)
 */

/* let brand = 'SamSUnG';
console.log(brand[4])    // U
console.log(brand.slice(1).toLocaleLowerCase())     //amsung
brand = brand[0] + brand.slice(1).toLocaleLowerCase();      ///Samsung
console.log(brand);

 */

/* const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1= 'Привет, я принс Абдул, это не спам, предлагаю тебе миллон';
const string2= 'Самая большая РАСПРОДАЖА этой недели, не пропустите';
const string3= 'Рекламная компания #fatlivesmatter';
console.log(string1.includes(blacklistedWord1 ))
console.log(string1.includes(blacklistedWord2 ))

console.log(string2.includes(blacklistedWord1 ))

console.log(string2.toLowerCase().includes(blacklistedWord2 ))

console.log(string3.includes(blacklistedWord1 ))
console.log(string3.includes(blacklistedWord2 ))
 */

/* 
const x1= 10;
const x2= 30;
const namber= 50;

console.log(`число ${namber} попадает в отрезок до ${x1}? ` , namber < x1);
console.log(`число ${namber} попадает в отрезок после ${x2}? ` , namber > x2);

 */

/* Напиши скрипт в JS обработки покупки в магазине.

Баланс пользователя хранится переменной balance Сумма покупки хранится в переменной рауmеnt

Перед проверкой вывести сообщение:

Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету

Если сумма покупки не превышает баланс:

- Вычесть из баланса суму покупки - Вывести сообщение «На счету осталось [число] кредитов

Если сумма покупки превышает баланс:

Вывести сообщение «На счету недостаточно средств для проведения операции! В конце вывести сообщение «Операция завершена

let balance = 10000; const payment = 2000;

"Все хорошо, снимаем деньги... Спасибо за покупку!" */

//                                          ответ:
/*
let balance = 10000;
const payment = 20000;
console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);
if (payment <= balance) {
balance -= payment;
console.log(`На счету осталось ${balance} кредитов`);
console.log("Все хорошо, снимаем деньги... Спасибо за покупку!");
} else {
console.log("На счету недостаточно средств для проведения операции!");
}
console.log("Операция завершена.")
*/

/*
Напиши скрипт подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнерская программа)
Общая сумма потраченного хранится в переменной totalspent
Сумма текущего платежа хранится в переменной рауmеnt Скидка хранится в переменной discount
Если потрачено от 100 до 1000 бронзовый партнёр, скидка 2%
Если потрачено от 1000 до 5000 - серебряный партнёр, скидка 5%
Если потрачено больше 5000 - золотой партнёр, скидка 10% 
Если потрачено меньше 100 - не партнёр, скидка 0%

В результате вывести сообщение: "Оформляем заказ на сумму: [сумма] со скидкой [скидка]"

Начальные условия:
const totalSpent = 2000
let payment = 500
let discount = 0;

/// Бронзовый партнер, скидка 2%
// Серебряный партнер, скидка 5% 
// Золотой партнер, скидка 10%
// У вас еще нет партнёрской скидки
*/

//                                ответ:
/*
let totalSpent = 2000;
let payment = 3000;
let discount = 0;
totalSpent = totalSpent + payment;

if (totalSpent >= 100 && totalSpent < 1000) {
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  discount = 0.05;
} else if (totalSpent >= 5000) {
  discount = 0.1;
} else {
  discount = 0;
}
const discountedPrice = payment * (1 - discount);
const formattedDiscount = discount * 100 + "%";

console.log(
  `Оформляем заказ на сумму ${discountedPrice} со скидкой ${formattedDiscount}`
);
*/

/*  
Допустим, в магазине действует акция на покупку товаров из категории "одежда". Покупатели могут получить скидку в зависимости от количества приобретенных товаров:
Если покупатель купил 2 товара, он получает скидку 10% на общую стоимость заказа.
Если покупатель купил 3 товара, он получает скидку 15% на общую стоимость заказа.
Если покупатель купил 4 и более товара, он получает скидку 20% на общую стоимость заказа.
Напишите скрипт, который запрашивает у пользователя количество товаров, которые он хочет купить, и выводит сообщение с общей стоимостью заказа со скидкой, если она предоставляется.
Пример вывода сообщений для 3 товаров по 1000 рублей каждый:
Введите количество товаров: 3
Общая стоимость заказа со скидкой: 2550 рублей (15% скидка)
*/
//                       ответ:
/*  
const price = 1000;
let numberOfGoods = prompt("Введите количество товаров", 1);

if (
  numberOfGoods === null ||
  isNaN(numberOfGoods) ||
  numberOfGoods.trim() === "" ||
  numberOfGoods < 0
) {
  console.log("Вы ввели некорректное значение.");
} else {
  let discount = 0;

  if (numberOfGoods < 2) {
    discount = 0;
  } else if (numberOfGoods == 2) {
    discount = 0.1;
  } else if (numberOfGoods == 3) {
    discount = 0.15;
  } else if (numberOfGoods >= 4) {
    discount = 0.2;
  }

  let payment = price * numberOfGoods * (1 - discount);
  let formattedDiscount = discount * 100 + "%";
  console.log(
    `Общая стоимость заказа: ${payment}, скидка: ${formattedDiscount}`
  );
}
*/

// let option = 1;
// let message = "";

// switch (option) {
//   case 1:
//     message = "самовывоз";
//     break;
//   case 2:
//     message = "курьер";
//     break;
//   case 3:
//     message = "почта";
//     break;
//   default:
//     "вам перезвонит менеджер";
// }
// console.log(message);



const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}

const string = "javascript";

for (const character of string) {
  console.log(character);
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (condition) {
  }
}

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34

  function filterArray(numbers, value) {
    const a = [];

    for (let index = 0; index < 10; index++) {
      a.push("");
    }
    return numbers.filter((item) => item > value);
  }
}
