"use strict";
/*1.Union Types
    -A variable that can hold multiple types
    -eg:-
        -let value: string | number;
        -here value can be both string and number
*/
//problem with a union type is that TS need to know the exact type to perform operation else will give error.
function operation(value) {
    let val = value.toUpperCase();
    return val;
}
/*
1.Problem with Union Types
    -the fn will give error bcz value type is not confirmed, if value is string or number
    -eg:-
        function operation(value:string | number){
            let val=value.toUpperCase();
            return val;
        }
    
    -here comes two solution
        -TPPE NARROWING
            -it uses type gaurd or type assertion to confirm type befor operation.
            -these are not resuable and may break for complex logic that why we need type predicate.
        -TYPE PREDICATE
            -custom reusable narrowing
            -it is custom type gaurd.
            -it is resuable and work for complex logic also.

2.Type Narrowing
    -reducing the union types into specific type using check is type narrowing.
    -as in below eg value types is first confirmed and then only method call on that value.
    -TypeScript uses conditions to guess the exact type

3.Built-in Type Guards
    1.typeof
        -typeof value === "string"
    2.instanceof
        -val instanceof Date
    3.in operator
        -"role" in user

4.Type Assertion (as)
    -You manually tell TypeScript the type

    -type Admin = {
        role: string;
    };
    let user: any = { role: "manager" };
    console.log((user as Admin).role);

    -drawback
        -No runtime check bcz now ts will trust us and perform the operation which may break in run time
        -Can cause bugs if wrong
        -that why we not prefred it to use

5.Problem Without Proper Narrowing
    -eg:-
        type User = { name: string };
        type Admin = { role: string };

        function getInfo(user: User | Admin) {
            console.log(user.role); //Error
        }

6.Before Type Predicate,we must understand:
    -Union Types (|)
    -Type Narrowing (via conditions)
    -Type Guards (typeof, in)
    -Type Assertion (as)
    -these fails for complex logic, not reusable so we use type predicate

7.Why Type Predicate Exists
    -same as type narrowing Type Predicate is also a way to tell TypeScript the exact type of a variable after a check.
    -It is used in custom type guards.
    -TypeScript cannot always infer types in complex conditions.
        -Type predicates help in:
        -Type narrowing
        -Safe property access
        -Avoiding type errors

    
    -eg:-
    1.  function isString(value: any): value is string {
            return typeof value === "string";
        }

        function print(value: string | number) {
            if (isString(value)) {
                console.log(value.toUpperCase()); // string
            } else {
                console.log(value.toFixed(2)); // number
            }
        }

    2.Without Type Predicate (Problem)
        function print(value: string | number){
            if (typeof value === "string") {
            console.log(value.toUpperCase());
        }
        -above fn will works for simple cases, but fails when logic is separate or reused.


8.Final Flow (Important for Understanding)
    -Union Type → multiple type possibilities
    -Type Narrowing → reduce possibilities
    -Built-in Guards → basic narrowing
    -Limitation → not reusable
    -Type Predicate → custom reusable narrowing

*/
//Type narrowing way of solution using type gaurd can also use assertion to do so
function operation2(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); //string
    }
    else {
        console.log(value.toFixed(2)); //number
    }
}
/*why this does not work
    -It ONLY checks the function signature (return type)
    -This function gives true/false, but I don't know what that means for the type.
    -TypeScript needs extra information -->That extra information is:value is string

    -Boolean function = runtime check only ,no info on value type
    -Type predicate = runtime + compile-time type info(extra info)

*/
/*
function isString(value:any):boolean{
    if(typeof value === 'string'){
        return true;
    }
    else{
        return false;
    }
}

function print(value:string | number){
    if(isString(value)){
        console.log(value.toUpperCase()); // string
    }
    else{
        console.log(value.toFixed(2)); // number
    }
}
*/
/*What is value is string
    -value is string ,is called a Type Predicate
    -It tells TS:If this function returns true, then value is of type string else value is number
    -TypeScript internally thinks:if true → value is string  if false → value is NOT string → so it must be number
    
doubt
    -Return type is not boolean, but we are returning true/false → should it be error?
    -Even though it looks different, value is string actually RETURNS a boolean internally.
        -bcz Type Predicate functions ALWAYS return boolean at runtime
    -Type Predicate functions always return boolean, but also inform TypeScript about the exact type when the result is true.
*/
//type predicate
function isString(value) {
    return (typeof value === 'string');
}
function print(value) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
print('satya');
print(3.8409169);
//this is wrong predicate 
//A type predicate must return a boolean that correctly represents the check
// function isString2(value:any):value is string{
//     return value;
// }
//type predicate for more than two possibility
function isString2(value) {
    return (typeof value === 'string');
}
function isNumber(value) {
    return (typeof value === 'number');
}
function print2(value) {
    if (isString2(value)) {
        console.log(value.toUpperCase());
    }
    else if (isNumber(value)) {
        console.log(value.toFixed(2));
    }
    else {
        value ? console.log(value) : console.log(value);
    }
}
