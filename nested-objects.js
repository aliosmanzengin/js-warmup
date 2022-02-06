//Nested Objects
/*
fName:John
lName:Cash
age:22

address:4th Street, Times Square, NYC, New York

hobbies: swimming, running, hunting

*/

const person = {
    fName: 'John',
    lName: 'Cash',
    age: 22,
    isEmployed: true,
    address : {
        street: '4th Times Square',
        city: 'NYC',
        state: 'New York'
    },
    hobbies : ['sswimming','running','hunting']    
}

//Calling
console.log(person);
console.log(person.age);
console.log(person.address);
console.log(person.address.city);
console.log(person.hobbies[1]);



