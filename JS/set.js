// const numbers = new Set();

// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(1);

// console.log(numbers)



const numbers =[10,20,15,30,15,20,35,60,10]

const dup = new Set();

for(let i=0;i<numbers.length;i++){
    if(dup.has(numbers[i])){
        console.log(numbers[i]);
    }

    dup.add(numbers[i]);
}