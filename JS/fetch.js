
// async function random(){

//     try{
//         const res = await fetch('https://randomuser.me/api/');
//           const data = await res.json();
          
//           const user = data.results[0];
//           const name = `${user.name.first} ${user.name.last}`
//           const email = user.email;
//           const location = `${user.location.city}, ${user.location.country}`;

//  console.log(name, email,location);
//     }catch(err){
//         console.log(err.message);
//     }
// }

// random();


// async function random1(){

//     try{
//         const res = await fetch('https://api.quotable.io/random');
//           const data = await res.json();
//           const content = data.content;
//           const author  = data.author;

//  console.log(content,author);
//     }catch(err){
//         console.log(err.message);
//     }
// }

// random1();


// async function userData(){
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
//             method: 'POST',
//             headers:{
//                 'Content-Type': 'application/json'
//             },
//             body:JSON.stringify({
//                title: "Rugved Learns JS",
//                 body: "He's crushing every topic!",
//                 userId: 99
//             })
//         }
//         );

//         const data = await res.json();
//         console.log(data);
//     }catch(err){
//         console.log(err.message)
//     }
// }

// userData();




async function results(){
    const res = await fetch("https://www.craigslist.org/about/")
    const data = await res.text();
    console.log(data)
}

results();

async function results1(){
    const res = await fetch("https:/jsonplaceholder.typicode.com/posts/1")
    const data = await res.json();
    console.log(data)
}

results1();
