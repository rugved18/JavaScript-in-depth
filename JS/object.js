// const mexico = {
//     id: 24,
//     name: "mexico",
//     capital: "mexico city",
//     neighbours :["USA","Gua","Belize"]
// }

// console.log(mexico);

// mexico.id = 25;

// mexico.neighbours.push("mexico");
// console.log(mexico);

// const myPet = {
//     name: "Sudo",
//     type : "Dog",
//     breed: "Poodle",
//     age: 7,
//     friends: ["Bit","Byte", "Data"]
// }

// myPet["color"] = "black";

// myPet.breed = "Beagle";



// myPet.friends.push("myPet");

// console.log(myPet)

// const banana = {
//     name: "banana",
//     quantity: 1,
//     price: 1.95
// }

// const apple = {
//     name: "apple",
//     quantity: 1,
//     price: 1.45
// }

// const candy = {
//     name: "candy",
//     quantity: 1,
//     price: 3.50
// }

// const store ={
//     storeNumber :5,
//     locationCity : "Milan",
//     locationCountry : "Italy",
//     products: [banana,apple,candy]
// }
// console.log(store)


// console.log(store.products)

// console.log(store.products[2])

// store.products[0].price = 1.75;


// console.log(store)

// candy.price = 4.99

// console.log(candy);
// console.log(store);



// const houseForSale = {
//     area: 940,
//     value: 320000,
//     streetName : "Fifth Street",
//     built : "2012",
//     owner: {name: "Blake",age: 29},
//     offers: [290000,295000,315000,312000]
// }

// console.log(houseForSale);

// delete houseForSale.built;

// houseForSale.owner.age = 30;
// console.log(houseForSale);

// const maxi = houseForSale.offers.reduce((result, maxii) =>{
//       if(maxii > result){
//         return maxii;
//       }
//     return result;
// },0)

// console.log(maxi);


// houseForSale['sales price']  = 312000;

// console.log(houseForSale);


const myConsole ={
  log : (message) =>{
 console.log(message);
  }
}

myConsole.log("hello")