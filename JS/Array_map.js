const check = () => {
  Ram.map((city) => {
    return city.toUpperCase();
  });
};

// let id = setInterval(()=> {console.log(1)},1000)

let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

let timesTen = numbers.map((number) => {
  return number * 2;
});

console.log(timesTen);

let practice = [25, 26, 27, 28, 29, 30];

let squarePractice = practice.map((sqr) => {
  return sqr ** 2;
});

console.log(practice);
console.log(squarePractice);

const bools = [true, true, false, true, false, false];

const bool1 = bools.map((bool) => {
  const random = Math.random();
  if (bool == true) {
    return random;
  }
  return 0;
});

console.log(bools);
console.log(bool1);

let prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const taxedPrices = prices.map((tax) => {
  if (tax > 10) {
    const ans = tax * (1 + 20 / 100);
    return ans;
  }
  return tax;
});

console.log(prices);
console.log(taxedPrices);

const items = ["light", "banana", "phone", "book", "mouse"];

const plurals = items.map((item) => {
    if(item == "mouse"){
        return "mice";
    }
  return item + "s";
});
console.log(plurals);
