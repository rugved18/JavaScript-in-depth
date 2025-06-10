// Array.push()
// Array.pop()
// Array.unshift()
// Array.shift

const arr =["Mercury","Venus","Earth", "Mars"]
console.log(arr);
arr.push("Jupiter")
console.log(arr);
arr.unshift("Sun")
console.log(arr);
arr.pop()
arr.pop()
console.log(arr);
arr.shift()
arr.shift()
console.log(arr);


let multiple = 10;
let arr1 = [10,11,12,13,14,15];

for(let i=0;i<arr1.length;i++){
    const result = arr1[i]*multiple;
    console.log(`${arr1[i]}+${multiple} = ${result}`)
}



const greeting ="Hello, nice to meet you!";

for(let i=0;i<greeting.length;i++){
    console.log(greeting[i]);
}

let total = 0;

const grades= [55,63,82,98,91,43];

for(let i=0;i<grades.length;i++){
     total= total + grades[i];
}
console.log(total/grades.length);


let bakery = ["cake", "cookie","bread","scone"]
console.log(bakery);

let myBakery = bakery;
myBakery.push("croissant","Granola");
console.log("Bakery",bakery);
console.log("MyBakery",myBakery);