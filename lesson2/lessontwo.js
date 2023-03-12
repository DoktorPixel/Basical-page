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

// ответ:
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
