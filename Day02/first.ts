/*
1.emun
    -enum = a way to define a fixed set of named constant values.
    -why enum
        -Prevent invalid values, 
        -Improve readability, 
        -Avoid hardcoded strings
    -Example: directions, roles, status

    -to use enum make sure your config.ts file has
        -"erasableSyntaxOnly": true, to false or commented
    -why
        -“erasable syntax” means:
        TypeScript code that exists only for type checking and is completely removed when converted to JavaScript.
*/

//enum
enum Direction{
    East='east',
    West='west',
    North='north',
    South='south',
}
function printDir(dir:Direction){
    console.log(`your direction is ${dir}`);
}
printDir('East');
printDir(Direction.East);


/*2.Type Aliases
    -type = create a custom name (alias) for any type
    -It does not create a new type, just a label for an existing structure
    -Customer is just a shortcut name Instead of rewriting the object type again and again
    -Solves: repetition, unreadable code, lack of reuse
    -type = alias (nickname) for a type

    -why needed
        -Repetition problem and also fn may look very hard to read if we need to pass a lot of parameter
        -eg:-
            -function getUser(user: { name: string; age: number; id: string }) {}
            -function updateUser(user: { name: string; age: number; id: string }) {}
    -solution
        -function getUser(user: Customer) {}
        -function updateUser(user: Customer) {}

    -property type alias support
        -Optional properties
            -eg:type User = {
                    name: string;
                    age?: number;
                };

        -Readonly properties
            -eg:type User = {
                    readonly id: string;
                };

        -Extending -Supported using & (intersection)
            -eg:type Person = {
                    name: string;
                };

                type Employee = Person & {
                  salary: number;
                };

        -Merging ❌no but interface support merging
            -eg:type User = {
                  name: string;
                };

                type User = {
                  age: number;
                };❌ Error


3.Literal Types
    -can exist without type also
    -Literal type = a type with an exact fixed value
    -It allows only one specific value, not a range(number, string, boolean etc)
    -type Status = "success" | "error" | "loading";   this is allowed bcz it is a finite set of exact values ,this is NOT a range
    -let status: "success" = "success"; // literal type  

*/
//primitive type
type name=string;
type age=number;

//union type 
type status='success'|'error'|'loading' //Very important (used instead of enum sometimes)
type direction='east'|'west'|'north'|'south'
//Literal Types
type status2='success';

//intersection type
type person1=name & age;
type person2=name&age&{address:string};

//object type 
type Teacher={
    name:string,
    subject:string,
    salary:string,
    age:number,
}

//type alias eg
type customer = {
    name:string,
    age:number,
    id: string,
    aadhar?:number
}

let c1:customer={
    name:"Rohit",
    age:20,
    id:"fshfsd"
}
let c2:customer={
    name:'satya',
    age:30,
    id:'rs100',
}



/*4.Interfaces
    -interface = defines the structure (shape) of an object
    -It tells what properties and types an object must have
    -same prbm it also solve as type alias but is bit different the alias 
        -repetition, unreadable code, lack of reuse

    -property type alias support
        -Optional properties
        -Readonly properties
        -Extending -Supports using extends keyword
            -eg:-
                interface Person {
                  name: string;
                }

                interface Employee extends Person {
                  salary: number;
                }
        -Merging
            -eg:-interface User {
                    name: string;
                }

                interface User {
                  age: number;
                }

*/
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

interface human{
    name:string,
    age:number,
    aadhar?:number,
    readonly address:boolean
}

interface human{    //can be included keys anytime
    canEat:boolean,
}

let student:human={
    name:'ritu',
    age:23,
    canEat:true,
    address:true,
}


/*INTERFACE vs TYPE
    -Declaration merging: interface supports merging, type alias does not
    -Purpose: interface is mainly for object structure, type is more general
    -Flexibility: type supports unions, tuples, primitives; interface does not
    -Extending: interface uses extends, type uses intersection (&)
    -Reusability: interface is better for scalable object design

*/


// Objects
// inline way of declaring object
let obj1:{name:string,age:number,gender:string} = {
    name:"Rohit",
    age:20,
    gender:"female"
}
let obj30:{name:string,age:number,gender:string}={
    name:'satya',
    age:30,
    gender:'male',
}

let person :{name:string;age:number,balance:number};
person={
    name:"rohit",
    age:20,
    balance:420
};
let person2:{name:string,age:number};
person2={
    name:'mantu',
    age:23,
}




//passing inline object in fn ->very bad readability
function passObj(obj11:{name:string,age:number,isAdmin:boolean}){
    return obj11.name;
}
console.log(passObj({name:'satya',age:20,isAdmin:true}));
// console.log(passObj({name:'ritu',age:23}));//error extra property not allowed


//passing type obj
type Users={
    name:string,
    age:number,
    admin:boolean,
}

const user:Users={
    name:'satya',
    age:22,
    admin:true,
}

function passObj2(obj:Users){
    return (obj.name, obj.admin, obj.age)
}
console.log(passObj2(user));

//passing interface obj'
interface Per{
    name:string,
    age:number,
    readonly admin:boolean; //cant be modified once updated
}
let Person3:Per={
    name:'billa',
    age:20,
    admin:true,
}
function Per3(obj:Per){
    console.log(obj.name);
}
Per3(Person3)
