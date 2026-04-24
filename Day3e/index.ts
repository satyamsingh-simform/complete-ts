/*1:Conditional Types
    -Conditional Types = type-level if-else
    -Conditional types help TypeScript predict correct return type based on input

*/

//both name and age must be same type T (say string)
type Box<T>={
    name:T,
    age:T,
}
const obj: Box<string> = {
    name: "satya",
    age: "21" // must also be string
};

type Box1<T>=T;
type A=Box1<number>;
type B=Box1<string>;


//Conditional Types
type Gen<T>=T extends number?'Number Type':'Other Type';
type A1=Gen<number>;//'Number Type'
type B1=Gen<string>;//'Other Type'

type Test<T>=T extends string?'yes':'no';
type A2=Test<string | number>//'yes'|'no'


//usecase-Return type changed based on input
type Result<T1>=T1 extends number ?number:string; 

function depend<T>(value:T):Result<T>{
    if(typeof value==='number'){
        return value as Result<T>;
    }
    else{
        return 'not a num' as Result<T>
    }
}
// Conditional types help TypeScript predict correct return type based on input
let a=depend(10);
let b=depend('satya');
a.toFixed(2);
b.toUpperCase();


// IsArray<T>\ Input: string[]\ Output: true




/*Mapped Types
    -Mapped Types = loop over keys of a type and create a new type
*/

type User={
    name:string,
    age:number,
}


type CopyUser2={
    [K in keyof User]:User[K]
}

type CopyUser={
    [K in keyof User]:User[K];
}



/*Template Literal Types
    -Template Literal Types = build new string types using existing ones
*/

// Q1
type Horizontal="left"|"right"
type Vertical="top"|"bottom"
// type AllPos=????   // "left|top" | "left|bottom" | "right|top" | "right|bottom"
// <!-- ans -->
type AllPos=`${Horizontal}${Vertical}`

// Q2
type Token=`Bearer ${string}` //Any string that starts with "Bearer " followed by anything
type TokenNum=`Bearer ${number}`//
const bearerToken:Token="Bearer ffewhwheiheri" //VALID
const myToken:Token="something efrwgetry" // ERROR
const bearerToken2:Token="Bearer anything" //VALID



/*What is infer
    -infer is used to extract a type from another type
    -Where is it used?
        -Only inside conditional types
    -Why we use it?
        -When we don’t know a type inside a structure and want to pull it out
*/

type GetArrayType<T>=T extends (infer U)[] ? U: T;

type A11=GetArrayType<string[]>;