// one line comment

/*
Here is multiple line comments
another comment here
*/

//1--------- 1.Var ----------
var Oddnumber = 11;
console.log(Oddnumber);

var Evennumber;
Evennumber = 20;
console.log(Evennumber);

var specialVariable = null;
console.log(specialVariable);

// do not recommend
// var num1 = 100, num2 = 101, num3 = 102;

var num1 = 100;
var num2 = 101;
var num3 = 102;

// Terms to be familiar with
//Variable redeclaration
var number = 1000;
console.log(number);
var number = 1001;
console.log(number);


//Variable reassignment
var myNumber = 9;
myNumber = 19;
console.log(myNumber);

//------- 2.Let -------
let firstName = 'Bronco';
let lastName = "CPP";
let anotherFullName ='Full name is ' + firstName + " " + lastName;
console.log(anotherFullName);

let fullName = `Full name is ${firstName} ${lastName}`;
console.log(fullName);

//------- 3.Const "Constant" ------- Have to declare value on the same line, variable will not be changedn
const piNumber = 3.14;
