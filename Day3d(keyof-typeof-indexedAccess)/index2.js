"use strict";
/*TypeScript typeof
    -typeof is used to get the type of a variable (value) in TypeScript
    -UserType is a type ,Types do NOT exist at runtime
    -console.log(UserType); cant be done

*/
const user1 = { name: "satya", age: 21 };
// type UserType = typeof user1;
//Real Use Cases of typeof
const user11 = {
    name: "satya",
    age: 21
};
function printUser(u) {
    console.log(u.age);
    console.log(u.name);
}
printUser(user11);
const user111 = {
    name: "satya",
    age: 21
};
//real usecase
function getValue(obj, key) {
    return obj[key];
}
getValue(user111, "name");
//Decorator
//  -Decorator runs when the class (and its methods) are defined
//  -Decorator = reusable wrapper to enhance behavior without touching original code
