class Animal{
    name:string;

    constructor (name:string){
        this.name = name;
    }

    makeSound():void{
       console.log(`the sound is ${this.name}`)
    }
}

const dog = new Animal("dog");
dog.makeSound();


class Vehicle{
    brand :string;
    year : number;

    constructor(brand:string,year: number){
        this.brand = brand;
        this.year= year;
    }

    displayInfo():void{
        console.log(`brand:${this.brand}, year: ${this.year}`)
    }
}

const display = new Vehicle("Honda", 2023);
display.displayInfo();

class Car extends Vehicle{
     model :string;

     constructor(model:string,brand:string,year: number ){
        super(brand,year);
        this.model=model;
     }

     displayInfo(): void {
         console.log(`brand:${this.brand}, year: ${this.year}, model : ${this.model}`)
     }

}

const newDisplay = new Car("rugved","oneNew", 2024);
newDisplay.displayInfo();


interface Playable{
    play(): void;
}

class GameOne implements Playable{
    name: String;

    constructor(name:string){
        this.name = name;
    }
    play(): void {
        console.log(`playing ${this.name}`)
    }
}

const playing = new GameOne("cricket");
playing.play();


