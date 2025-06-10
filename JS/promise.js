//1
const pro = new Promise((resolve,reject) =>{
    setTimeout(() =>{
 resolve("hello world")
    },3000)
})

pro.then((msg) =>{console.log(msg)})

//2
let fetchData = new Promise(function(resolve, reject){
    let data =true;
    if(data){
        resolve("successful")
    }else{
    reject("fail")
    }
})

fetchData.then((msg) =>{console.log(msg)}).catch((err) =>{console.log(err)})


const print = new Promise(function(resolve, reject){
    let number = 4;
    if(number%2 == 0){
        resolve("Even Number")
    }else{
        reject("Odd")
    }
})

print.then((num) =>{console.log(num)}).catch((err) =>{console.log(err)})

//3
const checkLogin =(username,password)=>{
    if(username === "admin" && password ==="1234"){
        return true;
    }
    return false;
}

const checkingLogin =(username,password)=> new Promise((resolve,reject) => {
    if(checkLogin(username,password)){
        resolve("Login successful")
    }else{
        reject("Invalid credentials")
    }
});

checkingLogin("rugved","3456").then((msg) =>{console.log(msg)}).catch(((err) =>{console.log(err)}))

checkingLogin("admin","1234").then((msg) =>{console.log(msg)}).catch(((err) =>{console.log(err)}))
