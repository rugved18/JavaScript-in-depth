//1
const welcomeUser =(name: string, age?:number) =>{
  if(age){
    console.log(`Welcome ${name}, age ${age}!`)
  }else{
    console.log(`Welcome ${name}`)
  }
}

welcomeUser("Rugved")


//2
const average = (...nums: number[])=>{
    let avg = 0;
   for(let i =0;i<nums.length;i++){
    avg= avg+nums[i];
   }

   return avg/nums.length;
}

console.log(average(1,2,3));


//3
function mergeValues(str: string, str1:string):string;
function mergeValues(str: number, str1:number):number;
function mergeValues(str:any,str2:any): any{
    if(typeof str === "string"){
        console.log(`${str} ${str2}`)
    }else if (typeof str2 === "number"){
        console.log(str*str2);
    }
}

mergeValues("Rugved", 'Kulkarni')
mergeValues(20,2)