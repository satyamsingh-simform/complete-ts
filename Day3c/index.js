"use strict";
/*Without Generics
    -Problem of Repetition
    -below is the perfect eg:-
        -Same logic Repeated code
        -same fn but bcz of diff type have to create diff fn
*/
//number type
function Num(num) {
    return num;
}
console.log(Num(100));
//string type
function str(str) {
    return str;
}
console.log(str('satyam'));
/*Generic
    -it is a way to create reusable functions/components that work with different types
    -<T> --> It tells TypeScript:This function will work with some type, which I’ll decide later
    -<T> = declaring a type variable (placeholder)
*/
/*
//This function takes a value of type T and returns the same type T
function identity<T>(value:T):T{
    return value;
}

console.log(identity<number>(101));
console.log(identity<string>('satyam1'));
//same as above
console.log(identity(101));        // TS infers string
console.log(identity('satyam1'));  // TS infers number


//generic working with array
function arr<T>(val:T[]):T{
    return val[0];
}
console.log(arr([0,1,2]));
console.log(arr(['s','a','t']));


//generic working with array
function arr1<T>(val:T[]):T[]{
    let wholeArr=val;
    return wholeArr;
}
console.log(arr1([0,1,2]));
console.log(arr1(['s','a','t']));


//multiple generics
//This is NOT a normal array, It is a Tuple
function multipleGen<T,U>(val1:T, val2:U):[T,U]{ //It returns a tuple [T, U] (fixed-size, ordered pair of two types)
    return [val1,val2]
}
console.log(multipleGen('sat',100));

//array of any lenght and any type of T|U can be return but for tuple both no. and order need to be fixed
function multiple<T,U>(val1:T, val2:U):(T|U)[]{ //It returns a tuple [T, U] (fixed-size, ordered pair of two types)
    // return []
    // return [val1]
    return [val1,val2]
}
console.log(multiple('sat',100));
*/
/*GENERIC vs ANY
    -Why They Look Same
    -Because TypeScript types are removed after compilation at runtime (JavaScript), BOTH become same
        -function any(value) {
            return value;
        }
        -function generic(value) {
            return value;
        }
    -Difference is ONLY at compile-time (TypeScript checking)


*/
/*
console.log("both generic and any will return the same thing here , but the diff is type");

//type any
function any(value:any):any{
    return value;
}
const result = any("hello")
result.toUpperCase(); // OK
result.toFixed(2);    // ALSO OK (though it will fail at runtime wrong)


//type generic
function generic<T>(value:T):T{
    return value;
}
const resultG = generic("hello");

resultG.toUpperCase(); // OK
resultG.toFixed(2);    // Error
*/
/*Generic Constraints (extends)
    -When you want:flexibility (generic) but with control (restriction)
    -extends restricts what type a generic can accept
    -Constraint doesn’t make all values have length ,It only allows values that already have length
*/
/*
function gen<T>(val:T):T{
    let res=val.length;
    return res;
}
//with extend above error can be removed
//Constraint doesn’t make all values have length ,It only allows values that already have length
function gen2<T extends {length:number}>(val:T){
    let res=val.length;
    return res;
}
gen2(100);
gen2('satyam');
*/
/*Generics with Objects */
const user = {
    name: "satya",
    age: 21
};
function genObj(obj) {
    return obj;
}
console.log(genObj(user));
