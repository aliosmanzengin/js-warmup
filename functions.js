

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