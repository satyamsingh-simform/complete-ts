<!-- Questions practice on type predicate -->

<!-- Q1.prerequistic -->
<!-- Because typeof returns a string, not a type. -->
typeof "abc"      // "string"
typeof 10         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof function(){} // "function"
typeof {}         // "object"
typeof []         // "object"
typeof null       // "object" (JS bug)
<!-- in checks whether a property and method to exists inside an object -->
    <!-- return 'bark' in animal; --> bark is fn
    <!-- "code" in value --> code is property


<!-- Q1. -->
type User = {
    name: string,
    email: string,
    phone: string
}
type Employee = User & { code: string }
function isEmployee(value: any): value is Employee {
    return // your logic
}

const obj:any={name:"abc",email:"abc@gmail.com",phone:"234567",code:"2222"}

if(isEmployee(obj)){
    console.log('obj is of employee')
}

<!-- ans -->
typeof value === Employee 
which was wrong why:-
    -typeof only works for primitive types (string, number, etc.)
    -Employee is a custom object type → not available at runtime

<!-- ans -->
return(
    value && typeof value==='object' && 
    "code" in value && 
    typeof value.code==='string'
)


<!-- Q2. -->
type User = { name: string };
type Admin = { name: string; role: string };

function isAdmin(value: any): value is Admin {
    return //logic
}
<!-- ans -->
return(
        value && typeof value ==='object' && typeof value.name==='string' && typeof value.role==='string'
)


<!-- Q3 -->
function isString(value: any): value is string {
    return // ?
}
<!-- ans:here null check is not required , null check need for object type  -->
return typeof value === 'string' //no null check needed bcz is not object 


<!-- Q4 -->
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function isDog(animal: Dog | Cat): animal is Dog {
    return // ?
}

<!-- my ans -->
return animal && typeof animal.bark==='void'
    here not need of null check as animal type is not any rather it has Dog | Cat
    typeof animal.bark==='void'--> this is entirely wrong bcz
        typeof NEVER returns "void It returns: "function" for functions

<!-- correct ans -->
    return 'bark' in animal;


<!-- Q5 -->
type Car = { speed: number };
type Bike = { gear: number };

function getDetails(vehicle: Car | Bike) {
    if (/* check car */) {
        console.log(vehicle.speed);
    } else {
        console.log(vehicle.gear);
    }
}

<!-- ans -->
"speed" in vehicle


<!-- Q6 -->
type Success = { status: "success"; data: string };
type Error = { status: "error"; message: string };

function isSuccess(res: Success | Error): res is Success {
    return // ?
}
<!-- ans both correct-->
    return 'data' in res;
    return res.status==='success'


<!-- Q7 -->
type A = { type: "a"; value: number };
type B = { type: "b"; value: string };

function handle(obj: A | B) {
    if (/* check A */) {
        obj.value.toFixed(2);
    } else {
        obj.value.toUpperCase();
    }
}
<!-- ans -->
(typeof obj.value === 'number')
obj.type==='a'   better


<!-- Q8 -->
function isArray(value: any): value is string[] {
    return // ?
}
<!-- my ans -->
    return value && Array.isArray(value) && value.forEach((val)=>typeofval==='string') //wrong
    forEach always returns undefined ,Your function will always return false
    also null check not needed bcz this will handle null check to Array.isArray(value)
<!-- ans -->
    return Array.isArray(value) && value.every((val)=>typeofval==='string') //


<!-- Q9 -->
function isNonEmptyString(value: any): value is string {
    return // ?
}
<!-- ans -->
    return typeof value ==='string' && value.length>0;


