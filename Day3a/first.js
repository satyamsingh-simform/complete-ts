"use strict";
const p1 = {
    name: "Rohit",
    age: 20,
    gender: "Male",
};
const p2 = {
    name: 'renu',
    age: 23,
    gender: 'female',
    aadhar: 99932768187,
};
p2.name = 'ritu'; //allowed
const c1 = {
    name: "Rohit",
    balance: 210,
    age: 20
};
// c1.name='abhi';  //not allowed as it is readOnly
//cant be modified
const c2 = {
    name: 'billa',
    age: 23,
    balance: 1000,
};
//all property become partial
const c3 = {
    name: 'not required',
    balance: 100,
};
//all poperty become mandatory
const c4 = {
    name: "abhi",
    age: 22,
    balance: 0,
};
;
const arr = [{ name: "Rohit", age: 20 }, { name: "Mohit", age: 18 }, { salary: 20, id: "2321" }];
;
const arr2 = [{ name: "Rohit", age: 20, address: 'jsr' }];
// // function in TS
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
//return type:number
function greet2(a) {
    return a;
}
//return type:void-->if not return anything by default the return type become void;
function greet3(a) {
    console.log(a);
}
/*//error as return type is void but i am returning no.
function meet(msg:string,val:number):void{
    console.log(msg,val);
    return val;
}
meet("Anshika Verma", 4);
*/
// default parameter
function neet(msg = "Jit") {
    console.log(msg);
}
neet();
neet("Bittu");
// Optional Parameter
function GATE(person) {
    console.log(person || "Mohan");
}
GATE("Rohit");
GATE();
//ARROW FUNCTION
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 4));
const sub = (a, b) => {
    console.log(b - a);
};
sub(4, 5);
// implicit type any
const sub2 = (a, b) => {
    console.log(b - a);
};
sub(4, 5);
const sqaureroot = (val) => {
    return val * val;
};
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
function cllback(amt, callback) {
    return callback(amt);
}
cllback(100, sqaureroot);
// Rest Parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
total(2, 3, 1, 4, 123, 1, 12, 10);
;
const obj8 = {
    name: "Rohit",
    age: 20,
    salary: "chillar",
    id: 123
};
