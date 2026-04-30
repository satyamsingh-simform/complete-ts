/*What is keyof?
    -keyof gives all keys (property names) of an object type as a union
    -keyof does NOT work directly on objects (values) It only works on types
    -keyof works on ANY TypeScript type, including:
        type
        interface
        object types (inline)
        typeof (from variables)
        mapped / utility types
        
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
        keyof Users = "name" | "age" //keyof Users will be replaced by "name" | "age"
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

type Users={
    name:string,
    age:number,
}
const user:Users={
    name:'satya',
    age:20,
}
// const keys=keyof Users; //wrong way
// console.log(keyof Users); // wrong way

// type uses = not : (colon)
type key=keyof Users;//right way
type key2=keyof user;// wrong bcz user is a value, not a type //type key2 = keyof typeof user;
type key3=keyof typeof user;//this is how above can be done


//unsafe
function getValue(obj:Users, key:string){
    return obj[key]; //unsafe
}
getValue(user, "name"); // 
getValue(user, "age");  // 
getValue(user, "city"); // Error //no compile time error showing

//safe
function getValue1(obj:Users, key:keyof Users){
    return obj[key]; //safe
}
getValue1(user, "name"); // 
getValue1(user, "age");  // 
getValue1(user, "city"); // Error //give compile time error 


