"use strict";
/*There are two main reasons to use TypeScript:
    -TypeScript adds a type system to help you avoid many problems with dynamic types in JavaScript.
    -TypeScript implements the future features of JavaScript a.k.a ES Next so you can use them today.
*/

//Number
let a = 20;
let b = 10;
//this line will show error in js as it type has already been defined which is no. and we are trying to re-assign string to it//it will show error but will convert it to JS file if valid JS syntax
// a='satya';
//String
let userName = 'Satya';
userName = 'Aman'; //this is valid as bcz re-assigning same type
// userName=10;//error same reason
//Boolean
let bool = true;
bool = false;
console.log(bool);
//BigInt:BigInt literals are not available when targeting lower than ES2020
// let big_num=8409169n;
//null & undefined
let mid_name = null;
// mid_name=undefined//Type 'undefined' is not assignable to type 'null'.
let sir_name;
// sir_name='singh'//Type '"singh"' is not assignable to type 'undefined'.
// sir_name=null;//Type 'null' is not assignable to type 'undefined'.
let first_name = 'satya';
const pi = 3.14;
/*
// a = "Rohit";

// Number
let a:number = 10;
let b:number = 20;

// string
let str:string = "Rohit";

// boolean
let isExist:boolean = true;
isExist = false;

// bigint
// let bignumber:bigint = 132143292183n;

// null
let abc:null = null;
let bcd:undefined=undefined;
// bcd = "Mohan";

let names:string = "Moahn";
let honey:number = 20;

const ho:number = 17;


// Compile time language
// Interprted language
// JIT: Just in time

let x = 20;
x = "rohit";
*/ 
