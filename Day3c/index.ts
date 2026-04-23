/*Without Generics
    -Problem of Repetition of same fn for diff data type
    -below is the perfect eg:-
        -Same logic Repeated code
        -same fn but bcz of diff type have to create diff fn 
*/

//number type
function Num(num:number){
    return num;
}
console.log(Num(100));

//string type
function str(str:string){
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

console.log(identity<number>(101));//function identity<number>(value: number): number
console.log(identity<string>('satyam1'));//function identity<string>(value: string): string
//same as above
console.log(identity(101));        // TS infers string  //function identity<101>(value: 101): 101
console.log(identity('satyam1'));  // TS infers number  //function identity<"satyam1">(value: "satyam1"): "satyam1"
*/

/*//generic working with array
function arr<T>(val:T[]):T{
    return val[0];
}
console.log(arr([0,1,2]));//function arr<number>(val: number[]): number
console.log(arr(['s','a','t']));//function arr<string>(val: string[]): string
console.log(arr([1,2,3,'s','a']));//function arr<string | number>(val: (string | number)[]): string | number
*/


//generic working with array
function arr1<T>(val:T[]):T[]{
    let wholeArr=val;
    return wholeArr;
}
console.log(arr1([0,1,2])); //function arr1<number>(val: number[]): number[]
console.log(arr1(['s','a','t']));


/*
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
    -Why They Look Same after compilation
    -Because TypeScript types are removed after compilation at runtime (JavaScript), BOTH become same
        -function any(value) {
            return value;
        }
        -function generic(value) {
            return value;
        }
    -Difference is ONLY at compile-time (TypeScript checking)


*/

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
resultG.toFixed(2);    // Error //bcz return type become string for 'hello'



/*Generic Constraints (extends)
    -When you want:flexibility (generic) but with control (restriction)
    -extends restricts what type a generic can accept
    -Constraint doesn’t make all values have length ,It only allows values that already have length
    -Why does constraint change inference?
    -Rule:
        -When a generic has a constraint, TypeScript prefers the widest type that satisfies the constraint
*/

function gen<T>(val:T):T{
    let res=val.length;
    return res;
}
gen('hello');//function gen<"hello">(val: "hello"): "hello"
//with extend above error can be removed
//Constraint doesn’t make all values have length ,It only allows values that already have length
function gen2<T extends {length:number}>(val:T){
    let res=val.length;
    return res;
}
gen2('satyam');//function gen2<string>(val: string): number
gen2(100);



/*Generics with Objects
    -user is of type Users ,Users satisfies the constraint { age: number } so TypeScript infers:T = Users
    -Even though constraint is: T extends { age: number } Actual type is NOT { age: number } It is the full type of argument passed
*/

interface Users{
    name:string,
    age:number,
}

const user:Users={
    name:"satya",
    age:21
};

function genObj<T extends {name:string,age:number}>(obj:T){
    return obj.age;
}
console.log(genObj(user));


/*Generics with Interfaces
    -Box<T> is a generic interface where T is a type parameter
    -When we write Box<string>, TypeScript infers: T = string
    -Even though interface is defined as value: T, actual type depends on what we pass
    -Box<T> acts like a template, reused for different types
    -Type is fixed at the time of usage (Box<string>, Box<number>, etc.)
    -Ensures type safety → value must match the provided type
    -Prevents using wrong type inside object
*/

interface Box<T> {
    value: T;
}
//string uses
const strBox: Box<string> = {
    value: "hello"
};
//number uses
const numBox: Box<number> = {
    value: 100
};