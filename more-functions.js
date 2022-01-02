add(20,30)
function add(a,b) {
    console.log(a+b);
}

add(9,8)
var num1;
//console.log(num1);//undefined (Reference error, rest of the code wont compile)
var num1 = 5;


//ANONYMUS Function: we yse "function keyword" but we do nut use function name.

var result =function (a,b,c) {
 return a+b+c  
}    

console.log(result(5,6,true)+' result'); //12
console.log(result(5,6,false)+' result'); //11
console.log(result('a',6,5)+' result'); //a65
console.log(true +2); //3
console.log(false +2); //2

//ARROW Functions: (came with ES6 in 2016)
//1. WITH ARGUMENT
(a) => {
   return a+100; 
}

(a) => a+50;

a => a+25;
//****** */
var arrw = (a,b) => {
    return a+b;
}
var arrw = (a,b) => a+b;


let john = a => a + 9999;
//same as:
function john1(a) {
    a+9999;
}

//2.WITHOUT ARG
let a = 4;
let b = 5;

() => a + b + 50;












