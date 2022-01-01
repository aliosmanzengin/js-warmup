console.log('hello world')

var myName ='JavaScript'
console.log(myName);
myName = 'Ali'
console.log(myName);

let myHeight ='6.5'
console.log(myHeight);
myHeight = '5.5'
console.log(myHeight);

const num ='99'
console.log(num);
// num = '100'
// console.log(num);

//DATA TYPES
/*
String:     '', ""
Number:     int, double ...
Boolean: 
Undefined:  Not initialized variables
Null:       null is an object type in JS. SOmetimes used to initialize variables
*/
var book = 'A Tale Of Two Cities'
console.log(typeof(book));

var author = 30
console.log(typeof(author))
var author = true
console.log(typeof(author))
var publisher; 
//it can be let but it can NOT be const. 
//Const variables MUST be initialized
console.log(typeof(publisher));

//STRING CONCATENATIONS
console.log(myName+' reads '+"'"+book+"'");
var newMessage = `${myName} reads '${book}'`
console.log(newMessage);