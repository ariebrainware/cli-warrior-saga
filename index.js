"use strict";
exports.__esModule = true;
var message = 'Welcome';
console.log(message);
var isActive = true;
console.log("Without type: " + isActive);
var areActivated = true;
var phoneNumber = 13421;
var name = 'Brainware';
console.log("With type: " + areActivated);
console.log("Name: " + name + ", phoneNumber: " + phoneNumber);
var isNew = null;
var myName = undefined;
console.log("case 1: " + isNew + ", case 2: " + myName);
var list1 = [1, 3, 2, 33];
var tupples = ['tes', 12];
console.log("List1: " + list1 + ", " + tupples);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var randomVal = 21;
randomVal = 'Hell';
randomVal = false;
console.log("Random value with any datatype: " + randomVal);
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 10;
anyType = false;
// Function
var add = function (num1, num2) {
    return num2 ? num1 + num2 : num1;
};
console.log(add(5, 2));
console.log(add(5));
var fullName = function (person) {
    console.log(person.firstname + " " + person.lastname);
};
var me = {
    firstname: 'Paul',
    lastname: 'Jenkins'
};
var other = {
    firstname: 'Tom'
};
fullName(me);
fullName(other);
