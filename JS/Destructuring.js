//1
let arr =[10,20,30]

const [a,b,c] = arr;
console.log(a);

//2
const person = {
  firstName: "Rugved",
  lastName: "Kulkarni",
  age: 22
};

const {firstName,age} = person;
console.log(age);
console.log(firstName) 

const displayUser =({username ="kulkarni",email}) =>{
    console.log(`Username ${username}, email: ${email}`)
}

displayUser({username:"Rugved",email :"rug@123"})
displayUser({email :"rug@123"})