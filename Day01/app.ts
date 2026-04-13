/*Why do we need TS if we already have JS 

    1.JavaScript Problem: No Type Safety
        -JS is dynamically typed → errors happen at runtime.
    2.TypeScript Solution: Static Typing
        -TS adds types → errors caught during development.

    3.Easier to Maintain Large Projects
        In JS:
            -Hard to know what data looks like
            -Breaks easily when team grows

            
    -->TypeScript is used to catch errors early, improve code quality, and make large projects easier to manage.
    -->whatever code we can write in js can also be written in TS, i.e., TS also support JS syntax  
    -->tsc --watch:change the TS code in JS as you write not wait for u to run cmd tsc in terminal
    -->to exit from tsc --watch: ctrl+c


*/


//Number
let a:number=20;
let b:number=10;

//this line will show error in TS as it type has already been defined which is no. and we are trying to re-assign string to it//it will show error but will convert it to JS file if valid JS syntax
// a='satya';

//String
let userName:string='Satya';
userName='Aman';//this is valid as bcz re-assigning same type
// userName=10;//error same reason

//Boolean
let bool:boolean=true;
bool=false;
console.log(bool);

//BigInt:BigInt literals are not available when targeting lower than ES2020
// let big_num=8409169n;

//null & undefined

let mid_name:null=null;
// mid_name=undefined//Type 'undefined' is not assignable to type 'null'.

let sir_name:undefined;
// sir_name='singh'//Type '"singh"' is not assignable to type 'undefined'.
// sir_name=null;//Type 'null' is not assignable to type 'undefined'.

let first_name:string='satya'

const pi:number=3.14;

//this gives error though i have not mentioned its type how->see day2
let x=10;
x='abhi';//this gives error though i have not mentioned its type how, bcz of type INFERENCE

//HW:which one is JS 
// Compile time language
// Interprted language
// JIT: Just in time







