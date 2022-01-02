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

