export {pi}

// function check(s){
//     let count =0;
//     for(let i = 0; i < s.length; i++){
//      if(s[i] =='a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u'){
//          count++;
//      }
//     }
//      return count;
// }
// console.log(check("hello world"));


// function factorial(n) {
//   if (n <= 0) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Should print 120
// console.log(factorial(-3)); // Should print 1



// function findEvens(arr) {
//   let evens = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evens.push(arr[i]);
//     }
//   }
//   return evens;
  
// }

// console.log(findEvens([1, 2, 3, 4, 5, 6])); // Should print [2, 4, 6]



// const users = [
//   { firstName: "John", lastName: "Doe", email: "john@example.com", active: true },
//   { firstName: "Jane", lastName: "Smith", email: "jane@example.com", active: false },
//   { firstName: "Alice", lastName: "Johnson", email: "alice@example.com", active: true }
// ];

// function ans(){
//   return users
//   .filter(({active}) => active)
//   .map(({firstName, lastName, email}) => {
//     return {
//       fullName: `${firstName} ${lastName}`,
//       email: email
//     };
//   }
//   )
// }

// console.log(ans());

// 2
const students = [
  { name: "Aman", score: 95 },
  { name: "Ravi", score: 76 },
  { name: "Sita", score: 88 },
  { name: "Meena", score: 59 }
];

function student(){
  return students
  .filter(({score}) =>score>80)
  .map(({name,score}) =>{
    return {
      Student: `${name}`,
      Score : `${score}`
    };
  })
}
console.log(student());


//3
const order1 = {
  apple: 3,
  banana: 2,
  orange: 1
};

const order2 = {
  banana: 1,
  orange: 4,
  mango: 5
};


//map, filter, reduce, foreach
const pi = 3.222

function fruits(o1,o2){
  const ALL = [...Object.entries(o1), ...Object.entries(o2)];

  return ALL.reduce((acc,[key,value]) =>{
    acc[key] = (acc[key] || 0) +value;
    return acc;
  }, {});
}
console.log(fruits(order1,order2));

