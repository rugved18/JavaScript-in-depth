//1
const logMessage= (msg:string| number)=>{
     if(typeof msg === 'string'){
  console.log(msg.toUpperCase)
     }else if (typeof msg ==='number'){
      console.log(msg**2)
     }
}

logMessage(2);

//2
