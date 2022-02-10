//  8) .splice()

const months = ['Jan', 'March', 'April', 'June'];
console.log(months);
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


//Syntax
/*
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
*/

//  months.splice(1,3);// >Array["Jan","May"]  --> remove the next 3 items starting from 1 
//  console.log(months);
//  months.splice(1);// >Array["Jan"]  --> Remove everything starting from 1
//  console.log(months);

// negative number represents index from the last
// -1 = last index
//months.splice(-2)//delete last 2 index

// 9) .slice(startIndex(inclusive), endIndex(exclusive))
months.slice(2) //--> similar to substring logic
console.log(months); //!!! months will remain unchanged
//instead of splice, slice is not changing the array
console.log(months.slice(2));//['March', 'April', 'May']
console.log(months.slice(-2))//['April', 'May']