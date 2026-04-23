/*Why do we need TS if we already have JS 
    1.JavaScript Problem: No Type Safety
        -JS is dynamically typed → errors happen at runtime.
    2.TypeScript Solution: Static Typing
        -TS adds types → errors caught during development.
    3.Easier to Maintain Large Projects
        In JS:
            -Hard to know what data looks like
            -Breaks easily when team grows

    -->TypeScript is used to catch errors early(at compilation time and not at run time), improve code quality, and make large projects easier to manage.
    -->whatever code we can write in js can also be written in TS, i.e., TS also support JS syntax  
    -->tsc --watch:change the TS code in JS as you write not wait for u to run cmd tsc in terminal
    -->to exit from tsc --watch: ctrl+c

*/


//Number
let a:number=20;
let b:number=10;

//this line will show error in TS as it type has already been defined which is no. and we are trying to re-assign string to it//it will show error but will convert it to JS file if valid JS syntax
// a='satya';
a=100;//allowed as same type

//String
let userName:string='Satya';
userName='Aman';//this is valid as bcz re-assigning same type
// userName=10;//this will give error same reason

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



/*TYPE INFERENCE
    -TS automatically determine the type of the varaible even if we have not specify a type, by seeing the value assign to it at first
    -at 1st what value we have assign to variable without mentioning its type then TS will make it type as the value we assign to it i.e., type inference.
    -this gives error though i have not mentioned its type how, bcz of type INFERENCE.
    -this is the general practice we follow for variable ,if we assign value at time of declaration we dont specifiy the type explictly TS will infere itself

*/
let x1=10;
x='abhi';
let x2='satya';
x2='satyam';


/*  1.any type: did not specify type, did not initialized then it become any
        -at time of declaration if we dont specify the type and did not initialized with value
            then its type become any i.e., now it can store any value same as JS
        -be aware of this type and dont use it, not recommanded.
    
    2.unknown type:
        -The any and unknown types in TypeScript are both used to represent values of any type.
        -but unknown is bit safer then any as bcz it will not allow any operation without type check 
        -where as in any there is no such type check is required
*/
let money;   //type any 
money='satya';
money=100;
money=true;

let last1:any;//this is also a way to create type any
last1=10;
console.log(last1.toUpperCase);//no. pe uppercase operation allow kr de raha hai  

let last2:unknown;
last2='sing';
// console.log(last2.toUpperCase);//it will not allow any operation without type check

if(typeof last2==='string'){
    console.log(last2.toUpperCase);
}


/*
2.void
    -The void type denotes the absence of having any type at all. Typically, you use the void type as the return type of functions that do not return a value.
    -eg
    function log(message): void {
        console.log(messsage);
    }

3.never
    -a never type does not hold any value, you cannot assign a value to a variable with the never type.
    -Since the never type has zero value, you can use it to denote an impossibility in the type system.
    -use the never type to represent the return type of a function that never returns the control to the caller. For example, a function that always throws an error:
*/

let useless:void;//its type become undefined
console.log(typeof useless);

//here alpha type will auto become never as bcz in alpha both string and no. is must to be present which is impossible,so type become never
let alph:string & number; 

//a fn whoe execution is infinite ,its return type also become never
function forever(): never {
  while (true) {}
}

function raiseError(message: string): never {
    throw new Error(message);
}




//NON-PRIMITIVE DATATYPE

//array
let arr:number[]=[1,2,3,4]; //this arr can now only contain the no.type
let arr2=[1,2,3,4,4]//this is also valid //bcz of type inference TS will determine it type
let arr31=[1,2,3,'satya']; //let arr31: (string | number)[] ,it will infere to number|string type
//union
let arr3:(string|number)[]=['satya',20,'abhi',21,30];//typeof arr3 is string | number
// arr3.push(true)//Type 'boolean' is not assignable to type 'string | number'.
arr3.push(20);//this is valid
arr3.push('aman');//valid

//this array can now contain all three data type
let arr4:(string|number|boolean)[]=['satya',true,20];

let arr5=[true,'satya',100]; //(string | number | boolean)[]


//TUPLE:arry of fixed size,where datatype of each value need to be specified, also here order matters
let tuple:[number,string]=[10,'satya'];
// let tuple2:[number,string]=['satya',10];//order matters //error


//object
let num:number = 10;

let x = 10;
let val = "Rohit"


let money1:any;
money1 = "Rohit";
money1 = 20;

// console.log(money.toUpperCase());

let val2:unknown;

val2 = "Rohit";
val2 = 10;

if(typeof val2 === 'string')
console.log(val2.toUpperCase());
if(typeof val2 === 'number')
console.log(val2.toFixed(2));


// Non Primitive
let arr0:number[] = [2,4,5,7,11];
let arr21 = [2,1,19,10];

let arr311:(string | number)[] = ["Rohit",20,11,"Sohan"];
arr311.push(10);

let arr41:(string | number | boolean)[] = ["rohit",10,false,11];


let tuple2:[string,number,number] = ["Rohit",10,11];




