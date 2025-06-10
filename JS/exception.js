try{
    let a = b+5;
}catch(err){
    console.log("there is an error",err.message)
}


//1
const div = (a,b)=>{
  if(b == 0){
    throw new Error("Cannot be divided by zero")
  }
    let ans = a/b;
    return ans;
}

try{
    console.log(div(1,0))
}catch(err){
    console.log(err.message);
}

//2,3
const getLenght=(str)=>{
    if(typeof str === "string")
    {
        return str.length;
    }
    throw new Error("Input must be a string")
}

try{
   console.log( getLenght("rugved_kulkarni"))
}catch(err){
    console.log(err.message);
}

try{
   console.log( getLenght(2))
}catch(err){
    console.log(err.message);
}finally{
    console.log("finally i have become the software engineer")
}