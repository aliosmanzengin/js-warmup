
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

