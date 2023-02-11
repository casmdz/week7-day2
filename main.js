// Continue from yesterday with Control Flow
// The Switch case statement

let day = new Date().getDay();

let literal_day = new Date().toString();

console.log(day)
console.log(literal_day)

// Switch Case Statement Syntax
switch(day){
    case 0:
        console.log('Go to church');
        break;
    case 1:
        console.log("Write code...it's Monday!!")
        break;
    case 2:
        console.log("Test Code...it's Tuesday!!")
        break;
    case 3:
        console.log("Testing more code on Wed")
        break;
    case 4:
        console.log("Write a feature for project on Thurs")
        break;
    case 5:
        console.log("Testing Feature on Friday")
        break;
    case 6:
        console.log('Rest on Sat')
        break;
    default:
        console.log("We don't have a case to handle that")
}


// Literal Day Example with Switch Case Syntax
switch(literal_day.split(" ")[0]){
    case'Sun':
        console.log('Go to church');
        break;
    case'Mon':
        console.log("Write code...it's Monday!!")
        break;
    case'Tue':
        console.log("Test Code...it's Tuesday!!")
        break;
    case 'Wed':
        console.log("Testing more code on Wed")
        break;
    case 'Thurs':
        console.log("Write a feature for project on Thurs")
        break;
    case 'Fri':
        console.log("Testing Feature on Friday")
        break;
    case 'Sat':
        console.log('Rest on Sat')
        break;
    default:
        console.log("We don't have a case to handle that")
}

// -- Creation of Objects in JavaScript
// -- Simple JavaScript Object --

let person = {
    name: 'John',
    age: 28,
    fav_color: 'Red'
}

// Accessing Data in our Object
console.log(person['name']) // Bracket Notation
console.log(person.name) // Dot Notation

// -- Complex JavaScript Object
let person2 = {
    name: "Max",
    age: 31,
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball: 'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United', 'Liverpool']
        }
    ],
    'Content-Type': {
        category: "Hooman",
        mode: "Beast!"
    }
}
console.log("=========")
console.log(person2['Content-Type'].mode);
// console.log(person2.["Content-Type"])
console.log(person2.prog_languages[2]);
console.log(person2.teams[1].soccer[0]);


console.log("==== JS Obj Prototype ====")
// -- JavaScript Object Prototype Methods -- Object Literal
console.log(Object.keys(person2))
console.log(Object.values(person2))

// Bad/Sad Path of looping through objects in JavaScript
for(let i = 0; i < person2.length; i++){
    console.log(person2[i])
}

// Happy Path of looping through objects in Javascript -- Looking for keys
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

// List Values from the person2 Object that are arrays
for(let i = 0; i < Object.keys(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}


console.log("====== Create Prototype ======")
// Create our own Object Prototypes -- with ES5 Method Syntax
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;

    // Make A Method inside of a JS Prototype
    this.printInfo = function(param) {
        console.log(param)
        return 'This car is a ' + this.year + ' '+ this.make + ' ' + this.model + '.'
    };
    this.method2 = function (param) {
        console.log(param)
        return 'This car is a ' + this.year + ' '+ this.make + ' ' + this.model + '.'
    };
    this.method3 = () => {
        console.log('code goes here')
    };
    // this.printInfo = function(wheels = 0, color){
    //     console.log(`This is a ${this.year}, ${this.make}, ${this.model}
    //     and has ${wheels} and the color is ${color}`);

    //     return 'Returned Value'
    // };
};
//instantiate 
const c1 = new Car('Honda', 'civic', 1999)
console.log(c1.printInfo('blah blah extrea stuff'));



    console.log("====== Create instance of a Prototype ======")
// Creating an instance of a prototype
let my_car = new Car('Honda', 'CR-V', 2019)

// Call our prototype method
console.log(my_car.printInfo(4, 'Gun Metal'))



console.log("====== Create Classes ======")
// -- JavaScript Classes -- //

class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.alive = true;}
        
    printInfo = () => {
        if (this.alive){
        console.log(`Hi my name is ${this.name} and I am ${this.age} years old`)
    }
        else {
            console.log('ouch') }
    }

    // printInfo() {
    //     return `Name: ${this.name} \n Age: ${this.age} \n Gender: ${this.gender}`
    // }
};

// Creating an instance of our Human Class
let wilma = new Human('Wilma', 25, 'Female');

// Use printInfo method from the instantiated wilma(Human) Class
wilma.printInfo()

class Baby extends Human{
    constructor(name, age, isWalking = false, isPottyTrained= false){
        super(name, age) //if you dont want to rewrite the Parent constructor 
        this.isWalking = isWalking;
        this.isPottyTrained = isPottyTrained;
    }

    //method overriding the parent
    func2() {
        console.log('This is BABYS func2')
    }
    // 
    func3() {
        console.log('This is func3')
    }
}
const h1 = new Human('Castiel', 90000) //instantiate 
h1.printInfo()


const b1 = new Baby('Jackjack', 0, true)

// JavaScript Inheritence using Classes
// class Baby extends Human{
//     constructor(name, age, gender, walking){
//         super(name, age, gender)
//         this.walking = walking
//     } isBabywalking() {
//         if(this.walking == true){ return 'Baby is walking!'
//         } else {  return 'Baby aint walking yet'}
//     }
// }

// Create an instatiated value for baby
    // let johnnie = new Baby('Johnnie', 1, 'Male', true);
    // console.log(johnnie.printInfo())
    // console.log(johnnie.isBabywalking())


    console.log('======= CLOSURE =======')
// -- JavaScript Closure -- //
/*
    A Closure is a self-invoking function that only runs once.
    It can then set a variable(Which in our case will be a counter) and 
    returns a function expression.

    For this example, we will add to a number after the inital call to the closure has been made.

    BTW JavaScript Closures are another type of variable that can be created.

*/

let count_up = ( function() {
    let counter = 0; // This will be our PRIVATE variable
    console.log('Hit')
    return function () { return counter++}
}) ()

let addNames = ( function () {
    let names = [];
    console.log('Adding Names')
    return function (name){
        console.log(names)
        return names.push(name)
    }
})()

// Async JavaScript Section //
console.log('======= Callbacks =======')
// -- JavaScript Callbacks -- //

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// Basic Example
function first(){
    console.log(1)
}

function second(){
    console.log(2)
}

// first()
// second()

// But what happens when we add delay to execution...
function first_delay(){
    // Simulation of delay
    setTimeout(function() {
        console.log(1)
    }, 5000)
}

function second_delay(){
    console.log(2)
}

// first_delay()
// second_delay()

// Callback function syntax
function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`)
    callback()
}

// doHomework('JavaScript', function() {
//     console.log('Done with Homework')
// })

/*
    Thought Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/

// We solve this above problem with Promises



console.log('======= PROMISES =======')
/*
    ======= Creating a JS Promise =====
*/

const getMePokemon = (name) => {
    return new Promise((resolve,reject) => {
        //this needs to take time
        setTimeout(()=>{        //nameless function is the call back
            if (name == 'shoha'){
                reject('That pokemon doesn\'t exist')
            }
            resolve(`Successfully got ${name}'s data`)
        }, 500)
    })
};

const responsee = getMePokemon('shoha')
console.log(responsee)

setTimeout(()=>{
    console.log(responsee)
}, 5001);

const gettingPokeData = async () => {
    const res = await getMePokemon('charizard')
    console.log(res)
};
gettingPokeData()


console.log('===========')

const isEvenNumber = (num) => {
    return new Promise( (resolve,reject) => {
        if(num % 2 == 0){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

// Using a JS Promise
isEvenNumber(10)
//Happy resolver path
// .then( (result) => {
//     console.log(`Even Number ${result}`)
// })
//Sad Reject path
.catch( (error) => {
    console.log(`Odd Number ${error}`)
})



// Another Example with Promises -- using Async/Await
function increase_salary(base, increase){
    const new_salary = base + increase;
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}

// function to add to base salary slowly
function slow_addition(n1, n2){
    return new Promise( (resolve) => {
        setTimeout( () => resolve(n1 + n2), 2000)
    })
}
const er3 = slow_addition(5,20)
console.log(er3)

function increase_slow_salary(base, increase){
    const new_salary = slow_addition(base, increase);
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}
const er4 = increase_slow_salary(15, 18)
console.log(er4)

async function async_increase_salary(base, increase){
    const new_salary = await slow_addition(base, increase);
    console.log(`The new salary is: ${new_salary}`);
    return new_salary
}

// const er5 = async_increase_salary(35, 45)
// console.log(er5)



console.log("\n======HOMEWORK======\n ")
console.log(' ')

/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
in a long string? 
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
};

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


console.log("\n====== QUESTION 2 ======\n ")

// function createPerson(firstName, lastName){
//     firstName = firstName;
//     lastName = lastName;
// };

// createPerson('Roy', 'grand')


// -- JavaScript Classes -- //

class Person{
    constructor(firstName, lastName, age){
        // var this = {};
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        //return this;
    }
    printInfo() {
        return `Name: ${this.firstName} ${this.lastName} \n Age: ${this.age}`
    }
};

// Creating an instance of our Human Class

let maggie = new Person('Wilma', 'Daley', 55);

// Use printInfo method from the instantiated wilma(Human) Class
console.log(maggie.printInfo())


/*
https://www.youtube.com/playlist?list=PLqq-6Pq4lTTaflXUL0v3TSm86nodn0c_u 
nameFunct = ( params ) => {}
getter setter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects 
 */

class Person2{
    constructor(first, last, age){
        this.first = first;
        this.last = last;
        this.age = age; 
    }
    printInfo = () => {
        return `Name: ${this.first} ${this.last} \n Age: ${this.age}`
    }
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
const p2a= new Person2('Sam', 'Wilson', 40)
console.log(p2a.printInfo())

let p2b= new Person2('Shirley', 'Temple', 30)
console.log(p2b.printInfo())

p2b.age = p2b.age;
console.log(p2b.printInfo());

console.log('\n____\n ')
for(let i=0; i < 5; i++) {
    console.log('Loop' + i) //will keep going until false 
    if (i ===3 ) break; // breaks at 3
};
for (let i = 0; i < 5; i++) {   // as long as i <5 it will execute 
    console.log('Hello World', i); // to show the increments, use i
};


console.log("\n====== QUESTION 3 ======\n ")
console.log('wanna cry now\n ')/*

Create a Promised based function that will check a string to determine if it's length is greater than 10.
If the length is greater than ten console log "Big word". 
If the length of the string is less than 10 resolve or reject console log "Small Number"
*/


const checkString = (str) => {
    return new Promise((resolve, reject)=>{
       if (str.length >= 10){
        reject(`${str} ... oof big word`)
       }
       resolve(`${str} ... yay small number`)
    })
};

console.log(checkString('small'))
console.log(checkString('thisiswaytoobigtopass'))

const gettingString = async() => {
    const res = await checkString('tiny')
    console.log(res)
};
gettingString()
