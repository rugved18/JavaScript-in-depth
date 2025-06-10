//1
interface book{
    title: string,
    author: string,
    page : number,
    isAvailable: boolean
}

const myBook: book={
   title:"airtel",
   author:"rugved",
   page:20,
   isAvailable: true
}

console.log(myBook)

//2
type UserRole = "admin"| "user" |"guest"

const currentUserRole: UserRole ="user";
console.log(currentUserRole)


//3
interface Person {
 name: string,
 age:number
}

interface Student extends Person{
    grade : string
}

const Student1: Student={
    name :"Rugved",
    age:22,
    grade:"89"
}

console.log(Student1)