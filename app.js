

function salute(params) {
    console.log(`Hello ${params}`)
}

salute('John') //Hello John
salute(true) //Hello true
salute(null) //Hello null
salute()//Hello undefined
salute('Sam', 'George') //Hello Sam

function information(location,price, schoolRating) {
    console.log(`Location : ${location}.
     Price: ${price}. 
     School: ${schoolRating}`);
}
information('Texas',50000, 'B+')
information()// 3x undefined
information('Dallas')//2x undefined
/*

Parameter    |   Argument
location     |   Dallas
price        |   50000
rate         |   B+
*/

function sum() {
    let x = 5
    let y = 10
    return x + y
}

console.log(sum());//15
const mySum = sum() +100 - 5000;
console.log(mySum);

function diff(num1, num2) {
    return num1 - num2
}
console.log(diff(100 - 60,20));

const resultDiff = diff();
console.log(resultDiff); //NaN (Not a Number)

//NOTE: instead of putting the result in a container, we can directly assign a function to a variable
//This is called as 'Anonymus Function'
const squareOfNumber = function squeare(num) {
    return num*num;
}
console.log(squareOfNumber());//NaN
console.log(squareOfNumber(55));

console.log(squareOfNumber);//      ƒ squeare(num) {
                            //          return num*num;
                            //      }



//TRIGGER WARNING: below code might disturb you a lot and you may not mentally recover this and hate JS
//MIND EFFING CODES

function product(num1 =10, num2 =20) {
    return num1*num2
}                   
console.log(product());         
console.log(product(88,99));// 8712 ...WE CAN OVERRIDE THE INITIALIZED PARAMETERS
console.log(product(99)); // 1980 ...WE CAN OVERRIDE ONE PARAM
console.log(product(true)); //20
console.log(product('Tom'));//NaN 
console.log(product(null));//0