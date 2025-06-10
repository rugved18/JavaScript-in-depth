let str="Hello everything";
console.log(str);

let colors : string[] =["red","green","blue"];
console.log(colors);

let person:  [string,number] =["john",30];
console.log(person);

person.push(30);
console.log(person);


// day3

enum Color{
   red,
   green,
   blue
}

const check: Color = Color.green;
console.log(check);


enum HttpStatus{
    OK ="200 OK",
    NotFound ="404 NOT FOUND",
    ServerError ="400 SERVER error"
}

let ans : HttpStatus = HttpStatus.OK;
console.log(ans);

const printMessage = (mes: string|number)=>{
     if(typeof mes === "string"){
        console.log(mes.toUpperCase());
     }else if (typeof mes === "number"){
        console.log(mes.toFixed(2));
     }
}


// let mode: "auto"|"manual"|"test"

// mode = "auto";
// mode ="custom";