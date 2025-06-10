const practice = [10,11,12,13,14,15,16,17,18,19,20]

const arr = practice.filter((num) =>{
    if(num % 2 == 0){
        return true;
    }
})

console.log(practice)
console.log(arr)


const countries = ["France", "South Africa", "Brazil", "United States", "Sweden"]

const check = countries.filter((city) =>{
  return !city.includes(" ")
})

console.log(check);



const prices = [1.23, 19.99,85.2, 32.87, 8, 5.2]

const lowPrice = prices.filter((price) =>{
    if(price*1.15 < 10){
        return true
    }
})

console.log(lowPrice);



const values = [[1,2,3],[0,0,1],[3,6,9],[0,1,2]]

const hasTwos = values.filter((num) =>{
    if(num.includes(2)){
        return true
    }
})
console.log(hasTwos)



const nums = [ 10,20,30,40,50]

const timeTwos = nums.map((num) =>{
    return num*2;
}).filter((num) =>{
    return num >50;
})

console.log(timeTwos)