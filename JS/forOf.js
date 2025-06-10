const newi = [1,2,3]

for(const num of newi){
    console.log(num)
}



const ans = new Map();

ans.set("name", "rug")
ans.set("age",22)

for(const item of ans){
    console.log(item[0],item[1]);
}