"use strict";
/*Type Inference in TS
    -TS automatically determine the type of the varaible even if we have not specify a type, by seeing the value assign to it at first
    -at 1st what value we have assign to variable without mentioning its type then TS will make it type as the value we assign to it i.e., type inference.
*/
//this gives error though i have not mentioned its type how->bcz of TS Type Inference
let x = 100;
// x='satya';
/*  1.any type: did not specify type, did not initialized then it become any
        -at time of declaration if we dont specify the type and did not initialized with value
            then its type become any i.e., now it can store any value same as JS
        -be aware of this type and dont use it, not recommanded.
    
    2.unknown type:
        -The any and unknown types in TypeScript are both used to represent values of any type.
        -but unknown is bit safer then any as bcz it will not allow any operation without type check
        -where as in any there is no such type check is required
    */
let money;
money = 'satya';
money = 100;
money = true;
let last1; //this is also a way to create type any
last1 = 10;
console.log(last1.toUpperCase); //no. pe uppercase operation allow kr de raha hai  
let last2;
last2 = 'sing';
// console.log(last2.toUpperCase);//it will not allow any operation without type check
if (typeof last2 === 'string') {
    console.log(last2.toUpperCase);
}
//NON-PRIMITIVE DATATYPE
//array
let arr = [1, 2, 3, 4]; //this arr can now only contain the no.type
let arr2 = [1, 2, 3, 4, 4]; //this is also valid //bcz of type inference TS will determine it type
//union
let arr3 = ['satya', 20, 'abhi', 21]; //typeof arr3 is string | number
// arr3.push(true)//Type 'boolean' is not assignable to type 'string | number'.
arr3.push(20); //this is valid
//this array can now contain all three data type
let arr4 = ['satya', true, 20];
let arr5 = [true, 'satya', 100]; //(string | number | boolean)[]
//TUPLE:arry of fixed size,where datatype of each value need to be specified, also here order matters
let tuple = [10, 'satya'];
// let tuple2:[number,string]=['satya',10];//order matters //error
//object
/*
let num:number = 10;

let x = 10;
let val = "Rohit"


let money:any;


money = "Rohit";
money = 20;

// console.log(money.toUpperCase());

let val2:unknown;

val2 = "Rohit";
val2 = 10;

if(typeof val2 === 'string')
console.log(val2.toUpperCase());
if(typeof val2 === 'number')
console.log(val2.toFixed(2));


// Non Primitive

let arr:number[] = [2,4,5,7,11];
let arr2 = [2,1,19,10];

let arr3:(string | number)[] = ["Rohit",20,11,"Sohan"];
arr3.push(10);

let arr4:(string | number | boolean)[] = ["rohit",10,false,11];


let tuple:[string,number,number] = ["Rohit",10,11];


// Objects
// inline
let obj1:{name:string,age:number,gender:string} = {
    name:"Rohit",
    age:20,
    gender:"female"
}


let person :{name:string;age:number,balance:number};

person = {
    name:"rohit",
    age:20,
    balance:420
};

let n1:number;
n1 = 10;



type customer = {
    name:string,
    age:number,
    id: string
}



let c1 : customer ={
    name:"Rohit",
    age:20,
    id:"fshfsd"
}


interface admin {
    names:string,
    age:number,
    position:string
};

interface admin {
    id:number
}


let obj3: admin = {
    names:"Rohit",
    age:20,
    position:"manager",
    id:210
};


// Interface vs Type
// Function
// Classes

*/
