let chill = ()=>{
    console.log("Doing some chilling")
    for(let i=1;i<=10;i++){
        console.log(`Chill... ${i}`)
    }
    console.log("That was ice cold!")
}
chill();

const noRemainder = (number, mod) =>{
   if(number % mod == 0){
    return true;
   }else{
    return false;
   }
}

const result1 = noRemainder(10,7);
const result2 = noRemainder(100,10);

console.log(result1);
console.log(result2);


let Login = (username, password)=>{
        if(username == "admin"){
            return true;
        }else if (username == "monkey" && password == "123")
        {
            return true;
        }else if (username == "moomoo" && password == "farm")
        {
            return true;
        }else{
            return false;
        }
}

const test =Login('hello','meow');
const test2 =Login('admin','lol');
const test3 =Login('monkey','123');
const test4 =Login('moomoo','farm');
const test5 =Login('moomoo','moo');

console.log(test,test2,test3,test4,test5)


const square =(num) =>{
   return num**2;
}

const sumOfSquare = (num1,num2) =>{
      return num1+num2;
}

const sum1 = sumOfSquare(square(2),square(3));
const sum2 = sumOfSquare(square(3),square(4));

console.log(sum1,sum2)