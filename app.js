//OBJECTS --- JavaScript Object Notation
/*
Objects are used to store data
Objects are created using {}
*/

var person = {
    fName:'John',
    lName:'Cash',
    age:19,
    isEmployed:true
}

//Calling the person obj
console.log(person)

console.log(typeof(person))//object

//1.calling the info using . notation
console.log(person.fName);
console.log(typeof(person.fName));//string

//2.calling the information using [] notation --less common way
console.log(person['fName'])//John

//Editing obj
person.fName='Mike'
person.lName='Lloyd'
person['age']=11
person['isEmployed']=false
console.log(person);//{fName: 'Mike', lName: 'Lloyd', age: 11, isEmployed: true}




