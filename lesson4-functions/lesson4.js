


  
  function filterArray(numbers, value) {
    const a = [];

    for (let index = 0; index < 10; index++) {
      a.push("");
    }
    return numbers.filter((item) => item > value);
  }





function calcBMI (weight,height) {
    const normalizedWeight = weight.replace (',','.')
    const normalizedWeight = height.replace (',','.')
    let result = NparseFloat(weight) / parsFloat(height)**2;
return Math.ceil(result);
}
const bmi = calcBMI ('88.3', '1.75')
console.log(bmi); \\ 28.8
