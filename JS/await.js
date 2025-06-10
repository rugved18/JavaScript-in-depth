//1
const delayedHello =()=>{
    return new Promise((resolve) =>{
setTimeout(() =>{resolve("Hello after 2 seconds")},2000)
    })
}

async function message () {
 try{
    let result = await delayedHello();
    console.log(result);
 }catch(err){
    console.log(err.message)
 }
}

message();

//2
const isPrime=(num) =>{
   return new Promise((resolve, reject) =>{
     if(num<= 1 ){
        reject("Not a Prime");
        return
    }

    for(let i=2;i*i<=num;i++){
        if(num%i === 0){
          reject("Not a Prime")
        return
        }
    }
  resolve("Prime")
   })
}

async function checking(){

    try{
    let ans = await isPrime(5);
    console.log(ans);
    }catch(err){
        console.log(err.message)
    }

} 

checking();

//3
const fetchUser =(id)=>{
    return new Promise((resolve,reject) =>{
        if(id === 101){
            resolve("User found")
            return
        }
        reject("User not found")
    })
}

async function  fetch (){
    let ans = await fetchUser(101);
    console.log(ans);
}
fetch();