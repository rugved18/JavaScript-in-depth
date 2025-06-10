// const companies = ["apple", "tesla", "spacex","amazon","meta","google"]

// const modded = companies.reduce((result, com) =>{
//      if(com.startsWith("a")){
//         return result;
//      }
//      return result+com+'-';
// }, [""])

// console.log(companies);
// console.log(modded);



// const prices = [1.23,19.99, 85.2, 32.87, 8,5.2]

// const afterTax = prices.reduce((result, num) =>{
//     if(num > 6){
//         return result+num;
//     }
//     return result + num *1.20;
// } ,0)

// console.log(afterTax);


// const items = ["light", "banana", "phone", "book", "mouse"]
// const caps = items.map((cap) =>{
//     return cap.toUpperCase();
// }).reduce((result, item) =>{
//      return result +item +" ";
// },"")

// console.log(caps)


const nums = [10,30,50,70,90]

const ans = nums.map((num) =>{
    return num**2;
}).filter((num1) =>{
    if(num1 > 1000){
        return true;
    }
}).reduce((result, num2)=>{
    return result+num2;
},0)

console.log(ans)