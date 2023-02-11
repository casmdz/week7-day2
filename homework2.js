//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
//in a long string? 
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"], // My favorite pizza is //list: loop
    tacos:"Anything not from Taco bell", // string : print
    burgers:"Portillos Burgers", // string: print
    ice_cream:["Chocolate","Vanilla","Oreo"], // list: loop
    shakes:[{  //dictionary - from Ober, its choco
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

/* i dont exactly know how to make this a function, so i will start just accessing the values 
 */

/*
person4 KEYS: pizza tacos burgers ice_cream shakes      (properties)
Array.isArray([]) 
*/

// for (const entry of Object.entries(person3)){
//     console.log(`${entry[0]} === ${entry[1]}`)
// }     https://youtu.be/tVq4L8tnWuA 


function favoriteFoods(person3){
    for (const [key, value] of Object.entries(person3)){
        if (key === 'shakes') {
            for (let place in value[0]){
                console.log(`My favorite shake from ${place} is ${value[0][place]}`)};
        }
        else{
            console.log(`My favorite ${key}: ${value}`)
        }
        
    }
}
favoriteFoods(person3)






//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, and has a
printInfo method, 
and also has a method that increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print both of their infos 
and increment one personsage by 3 years. Use an arrow function for both methods.
*/
/*
https://www.youtube.com/playlist?list=PLqq-6Pq4lTTaflXUL0v3TSm86nodn0c_u 
nameFunct = ( params ) => {}
getter setter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects 
 */

// Create our Person Prototype
class Person2{
    constructor(first, last, age){
        this.first = first;
        this.last = last;
        this.age = age; 
    }

// Use an arrow to create the printInfo method

    printInfo = () => {
        return `Name: ${this.first} ${this.last} \n Age: ${this.age}`
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

    get age(){
        return this._age;
    }
    set age(newAge){
        // for(let i= this._age; i < 50; i++){
        //     console.log('Getting older' +i )
        //     if (i ===50) break;
        // }
        if (this._age + 3 <= 50) {
            this._age = newAge + 3;
        } else {
            this._age = newAge;
        }
        
    }
};

const p2a= new Person2('Obiwan', 'Kenobi', 40)
console.log(p2a.printInfo())

let p2b= new Person2('Shirley', 'Temple', 30)
console.log(p2b.printInfo())
p2b.age = p2b.age;
console.log(p2b.printInfo());

let p2c= new Person2('Steven', 'Wilson', 44)
console.log(p2c.printInfo())
p2c.age = p2c.age;
console.log(p2c.printInfo());
p2c.age = p2c.age;
console.log(p2c.printInfo());


// extra credit is doing the same as a class ( essentially swapping Class and Function )




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 resolve or reject console log "Small Number"

    creating a promise, the function (first line) is simple,
        return the Promise
            (resolve, reject) => {
                use setTime out OR async try/catch
            }
*/

const checkString = (str) => {
    return new Promise((resolve, reject)=>{
       if (str.length >= 10){
        reject(`${str} ... big word`)
       }
       resolve(`${str} ... small number`)
    })
};

console.log(checkString('small'))
console.log(checkString('thisiswaytoobigtopass'))

const gettingString = async() => {
    const res = await checkString('tiny')
    console.log(res)
};
gettingString()