//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}



function iterObj(obj) {
    for (let k in obj) {
        console.log(obj[k]);
        if (obj[k] !== null && typeof obj[k] === "object"){
            iterObj(obj[k]);
        }
    }
}
iterObj(person3)

function parsePersonObject(person){

    // Loop through keys of person:
    for (let i = 0; i < Object.keys(person).length; i++){

        // If value of object at key[i] is an array...:
        if (Array.isArray(Object.values(person)[i])){

            // loop thru that array
            for (let j = 0; j < Object.values(person)[i].length; j++){

                // if value of array[j] is an object...:
                if(typeof(Object.values(person)[i][j]) === 'object'){

                    // loop thru the keys of that person[i][j]
                    for (let k = 0; k < Object.keys(Object.values(person)[i][j]).length; k++){

                        // then log the value at index [k] of person[i][j]
                        console.log(Object.values(Object.values(person)[i][j])[k])
                    }
                }else {
                    console.log(Object.values(person)[i][j])
                }
            }
        }else{
            console.log(Object.values(person)[i])
        }
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype:
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;

        // Use an arrow to create the printInfo method:
        this.addAge = () =>{
            return this.age ++;
        } 
        
        // Create arrow function for addAge method (it takes a single parameter):
        this.printInfo = () => {
            return `Name: ${this.name} Age: ${this.age}`
        }
    }
}

let Rima = new Person('Rima', 7)
let Apollo = new Person('Apollo', 24)

// Adding to the age of person specified:
console.log(Apollo.printInfo())
console.log(Apollo.addAge())
console.log(Apollo.addAge())
console.log(Apollo.addAge())
console.log(Apollo.printInfo())

Rima.printInfo()




// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkWord = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10){
            resolve('thats a big word!');
            console.log('thats a big word!');
        } else {
            reject('Too small!');
            console.log('too small')
        }
    })
}