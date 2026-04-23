/*RULE:
    1.Value → Type
        -typeof value
    
    2.Type → Keys
        -keyof TYPE

    3.Type → Property Type
        -TYPE["key"]

    4. All Values of Object---> Give me the type of ALL values inside the object
        -typeof obj[keyof typeof obj]


<!-- Step 1  typeof obj[keyof typeof obj] -->
typeof user
Returns a type, not a value:
{
  name: string;
  age: number;
  isAdmin: boolean;
}
<!-- Step 2 -->
keyof typeof user
From that type, get keys:
"name" | "age" | "isAdmin"

<!-- Step 3 (important correction) -->
typeof user["name" | "age" | "isAdmin"]

<!-- Final result -->
string | number | boolean
*/


<!-- Q1. -->
const user = {
    name: "satya",
    age: 21,
    isAdmin: true
};

// Step 1: create type from user
type UserType = typeof user // ?

// Step 2: create union of keys
type Keys = keyof typeof user // user110 is a value keyof works on type

// Step 3: get type of "name"
type NameType = typeof user['name'] //typeof converts value → type then ['name'] works on that type

// Step 4: get type of all values (union)
type ValueType = keyof typeof user// ?





<!-- Q4 -->
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function isDog(animal: Dog | Cat): animal is Dog {
    return // ?
}

<!-- correct ans -->
    return 'bark' in animal;



<!-- Q2. -->
const config = {
    api: {
        url: "https://api.com",
        timeout: 5000
    },
    theme: {
        darkMode: true,
        fontSize: 16
    },
    version: "1.0.0"
};

// Step 1: type of config
<!-- type ConfigType = typeof config; -->

// Step 2: keys of config
<!-- type ConfigKeys = keyof typeof config; -->

// Step 3: type of api object
<!-- type ApiType = typeof config["api"]; -->

// Step 4: type of timeout
<!-- type TimeoutType = typeof config["api"]["timeout"]; -->

// Step 5: union of all top-level values
<!-- type TopLevelValues = typeof config[keyof typeof config]; -->
typeof config DOES include nested structure BUT…keyof typeof config only gives top-level keys

// Step 6: union of all values inside "api"
<!-- type ApiValues = (typeof config["api"])[keyof typeof config["api"]]; -->




<!-- //Conditional Types -->
type Gen<T>=T extends number?'Number Type':'Other Type';
type A1=Gen<number>;//'Number Type'
type B1=Gen<string>;//'Other Type'

type Test<T>=T extends string?'yes':'no';
type A2=Test<string | number>//'yes'|'no'

<!-- //Mapped typed -->
type User={
    name:string,
    age:number,
}

type CopyUser={
    [K in keyof User]:User[K];
}