"use strict";
/*What is keyof?
    -keyof gives all keys (property names) of an object type as a union
    -keyof Users → exists only at compile-time
    -keyof Users is a type, not a value
    -console.log(...) → works at runtime (JavaScript)
    -keyof Users → exists only at compile-time (TypeScript)
    -keyof Users = "name" | "age"

how keyof works
    Step 1: Expand keyof Users
        function getValue(obj: Users, key: keyof Users) {
            return obj[key];
        }
        keyof Users = "name" | "age" //keyof Users will be replaced by an object
    Step 2: Replace in function
        function getValue(obj: Users, key: "name" | "age") {
            return obj[key];
        }
    Step 3: Call Function
        getValue(user, "name");

    Now TypeScript checks: "name" ∈ ("name" | "age") allowed

    step4: another call
        getValue(user, "city");
    Now TypeScript checks: "city" ∈ ("name" | "age") not allowed
*/
const user = {
    name: 'satya',
    age: 20,
};
//unsafe
function getValue(obj, key) {
    return obj[key]; //unsafe
}
getValue(user, "name"); // 
getValue(user, "age"); // 
getValue(user, "city"); // Error //no compile time error showing
//safe
function getValue1(obj, key) {
    return obj[key]; //safe
}
getValue1(user, "name"); // 
getValue1(user, "age"); // 
getValue1(user, "city"); // Error //give compile time error 
