
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





function calcBMI (weight,height) {
    const normalizedWeight = weight.replace (',','.')
    const normalizedWeight = height.replace (',','.')
    let result = NparseFloat(weight) / parsFloat(height)**2;
return Math.ceil(result);
}
const bmi = calcBMI ('88.3', '1.75')
console.log(bmi); \\ 28.8
