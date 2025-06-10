//Regular Function
function newRegular(){
console.log("hii");

}
newRegular();


//arrow Function
let newArrow = (messgae)=>{
console.log(`Rugved is very good at ${messgae}`)

}
newArrow("javascript");
newArrow("java");

const details = (name, age, USN)=>{
 return  `name is ${name}, age is ${age} and USN as ${USN}`
}
console.log(details("rugved",30, 120))

const printMany = (message, num)=>{
    for(let i =0;i<num;i++){
        return message
    }
}
const ans =printMany("javascript", 3)

console.log(ans)