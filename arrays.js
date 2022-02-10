
/*
ARRAYS
in java we had to use same types of elements in array, 
in JS we can store different types of elements

Arrays are SPECIAL TYPE OF OBJECT
We use [] to create arrays
We use index to read arrays

*/

//Declaring array
var friendList = ['sam','tim','pete']

//new keyword can be used
var friendList1 = new Array('joe','mike','danny')

//Reading the arr
console.log(friendList);//['sam', 'tim', 'pete']
console.log(friendList[0]);//sam

console.log(friendList[4]);//undefined

//Editing Arrays
//Change Sam -> Sue
friendList[0] = 'sue'
console.log(friendList);

//Adding new values in the array
friendList[4]='Gabe'
console.log(friendList);//['sue', 'tim', 'pete', empty, 'Gabe']

friendList[7]='Alex'
console.log(friendList);//['sue', 'tim', 'pete', empty, 'Gabe', empty × 2, 'Alex']
//adding like this is not recommended because it is possible to leave some indexes blank

//We should use array methods to add data

// to add the array we use:
// 1) push() : add data at the end of the array
friendList.push("George")

console.log(friendList);//['sue', 'tim', 'pete', empty, 'Gabe', empty × 2, 'Alex', 'George']

// 2) unshift() : add data at the BEGINNING
friendList.unshift('Michelle')

//DELETING ELEMENTS FROM ARRAY

// 3) pop() : delete the LAST element
friendList.pop();//if array is emty, undefined will return

// 4) shift() : delete the FIRST data
friendList.shift();

var ages = [27, 77, 45, 11, 77,555,222, 77]
console.log(typeof(ages));//object

//because array data type is object, you can add different types of data into the array

var myArray = [27, "Loui", true, ages]

// 5) indexOf(item, from) : returns 1st index of the item
console.log(ages.indexOf(45));//2
console.log(ages.indexOf(true));//-1
console.log(ages.indexOf(77,2));//4 --> start search from index 2

// 6) lastIndexOf(item, from) 
console.log(ages.lastIndexOf(77)); //7

// 7) includes(item, starting index)
//returns true if item is inside the array
//returns false if not found
console.log(ages.includes(45));




