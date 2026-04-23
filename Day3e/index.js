"use strict";
/*1:Conditional Types
    -Conditional Types = type-level if-else
    -Conditional types help TypeScript predict correct return type based on input

*/
const obj = {
    name: "satya",
    age: "21" // must also be string
};
function depend(value) {
    if (typeof value === 'number') {
        return value;
    }
    else {
        return 'not a num';
    }
}
// Conditional types help TypeScript predict correct return type based on input
let a = depend(10);
let b = depend('satya');
a.toFixed(2);
b.toUpperCase();
// IsArray<T>\ Input: string[]\ Output: true
/*Mapped Types
    -Mapped Types = loop over keys of a type and create a new type
*/
/*
type User={
    name:string,
    age:number,
}

type CopyUser={
    [K in keyof User]:User[K];
}
*/
/*Template Literal Types
    -Template Literal Types = build new string types using existing ones

*/
