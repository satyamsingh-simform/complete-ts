/*Conditional types vs Infer
    -Conditional types (T extends X ? Y : Z)→used to check structure
    -infer → used to extract inner types from a structure
        -infer only works when TypeScript can extract something from a structure
        -we used infer within a conditional statement, and this is a limitation of using infer in TypeScript. 
        Also, you cannot use it outside of an extends clause.

//Solved All Question
Q1 – Extract Array Element
type GetElement<T> = ???;
string[] → string

Q2 – Extract Promise Value
type UnwrapPromise<T> = ???;
Promise<string> → string

Q3 – Extract Function Return Type
type MyReturn<T> = ???;
() => number → number

Q4 – Extract Function Parameters
type MyParams<T> = ???;
(a: string, b: number) => void → [string, number]

Q5 – First Element of Tuple
type First<T> = ???;
[string, number] → string

Q6 – Last Element of Tuple
type Last<T> = ???;
[string, number] → number

Q7 – First Argument of Function
type FirstArg<T> = ???;
(a: number, b: string) => void → number

Q8 – Nested Infer (Promise + Array)
type Unwrap<T> = ???;
Promise<string[]> → string

Q9 – Flatten Array Once
type Flatten<T> = ???;
string[][] → string[]

Q10 – Check if Function
type IsFunction<T> = ???;
() => void → true

*/

//1. Check if type is Array
type IsArray<T>=T extends any[]?true:false;
type arr1=IsArray<number[]>;
type arr21=IsArray<string>;

//real life eg
let arr = [1, 2, "d"];
type GetTypeOfArrayElement<T> = T extends (infer S)[] ? S : never; //infer does NOT look at values at all. It works purely at the type level.
type T11 = GetTypeOfArrayElement<typeof arr>; // number


//Extract array element type:
type GetArrayType2<T>=T extends (infer U)[]?U:'No';   //infer does NOT look at values at all. It works purely at the type level.
type arrT1=GetArrayType2<number[]>;
type arrT2=GetArrayType2<[]>;
type arrT3=GetArrayType2<5>;

//complete tuple type
type GetTupleType<T>=T extends [...infer P]?P:never;
type lastT0=GetTupleType<[1,2,3]>
type lastT1=GetTupleType<["1",2,true]>

//first el of tuple
type GetTupleTypeFirst<T>=T extends [infer P, ...any[]]?P:never;
type last0=GetTupleTypeFirst<[1,2]>
type last1=GetTupleTypeFirst<number[]>
type last2=GetTupleTypeFirst<["1",2]>

// type GetTupleType2<T>=T extends [infer P, ...args:any[]]?P:never;//wrong syntax
//last el of tuple
type GetTupleTypeLast<T>=T extends [...any[],infer L]?L:never;
type last=GetTupleTypeLast<[1,2]>

//2nd last 
type GetTupleType2ndLast<T>=T extends [...any[],infer L1, infer L2]?L1:never;
type ndlast=GetTupleType2ndLast<[1,'2', true]>

/*Function Type Structure
    -(...args:any[])=>any
    -1.(...args: any[])
        ...args → function can take any number of arguments
        any[] → arguments can be of any type
    -2. => any
        -This represents the return type of the function
        -any → function can return anything
    
    Always remember:
        -You’re comparing:Actual function implementation syntax vs Function type syntax
            -They look similar but are written differently on purpose
        : → used in real code (implementation)
        => → used in function type (description)
*/
//2. Check if type is Function
type IsFunction<T>=T extends (...args:any[])=>any?true:false;
type func1=IsFunction<()=>number>;
type func2=IsFunction<()=>any>;
type func3=IsFunction<(a:number,b:number)=>number>

type GetFunctionType<T>=T extends (...arg:any[])=>infer R?R:never;//“Match a function → ignore params → capture return type as R”
type funcT1=GetFunctionType<()=>string>;
type funcT2=GetFunctionType<()=>>;  //A function type in TypeScript must always have a return type.
type funcT3=GetFunctionType<()=>void>;

//infer extracts whatever part of the type you place it in (params vs return)
type GetParamType<T>=T extends (...arg: infer P)=>any?P:never;
type param1=GetParamType<(a:number,b:string)=>void>


//3. Check if type is Object
type IsObj<T>=T extends object?true:false;
type obj1=IsObj<{name:'satya',age:20}>
type obj2=IsObj<{}>
type obj3=IsObj<{name:string,age:20}>
type obj4=IsObj<null>

// type GetObjType<T>=T extends (infer U)object?U:never; //object = no inner structure nothing to “extract”
type GetObjType<T>=T extends {name:infer U}?U:never;
type objT1=GetObjType<{name:number,age:string}>


//4. Check if type is String
type IsString<T>=T extends string?'yes':'no'
type str1=IsString<'satya'>
type str2=IsString<100>

//not useful, When infer becomes useful :Only when used with a structure
type GetType<T>=T extends infer T?T:never
type G1=GetType<'satya'>
type G2=GetType<number>

let str = "Hello, World!"; // str is a string
type GetType2<T> = T extends infer S ? S : never;
type T1 = GetType2<typeof str>; // string

//6. Check if type is Promise
type IsPromise<T>=T extends Promise<any>?true:false; //Promise<T> is a built-in generic type that represents a value that will be available in the future
type p1=IsPromise<Promise<number>>;
type p2=IsPromise<number>;

type GetPromiseType<T>=T extends Promise<infer U>?U:never;
type ProT1=GetPromiseType<Promise<number>>;
type ProT2=GetPromiseType<Promise<Number>>
type ProT3=GetPromiseType<Promise<number[]>>

//real life eg
let promise = Promise.resolve([1, 2, 3]); // Promise<number[]>
type GetTypeOfPromise<T> = T extends Promise<infer S> ? S : never;
type T111 = GetTypeOfPromise<typeof promise>; // number[]
type T211 = GetTypeOfPromise<Promise<number>>; // number
type T311 = GetTypeOfPromise<Promise<string[]>>; // string[]

// By the way, Typescript itself already have a built-in utility for it that has more powerful functionality 👏:
type T4 = Awaited<typeof promise>; // number[]



//Q8 – Nested Infer (Promise + Array)::Remove ONE level of array nesting
type NextedType<T>=T extends Promise<(infer U)[]>?U:never
type nested1=NextedType<Promise<number[]>>
type nested11=NextedType<Promise<number[][]>>
type nested111 = NextedType<string>;



//Q9 – Flatten Array Once:Remove ONE level of array nesting
type Flatten<T> = T extends (infer U)[] ? U : "NO";
type F1 = Flatten<number[]>;    // number
type F2 = Flatten<string[][]>;  // string[]
type F3 = Flatten<string>;      // string
// type FW = Flatten<number[1,2,3]>; //you are trying to pass values (1,2,3) but types only work with types, not values

/*-Dry Run: FlattenAllLevel<string[][]>
Step 1
    -FlattenAllLevel<string[][]>
    -Check condition:
        -string[][] extends (infer U)[]
        -YES → it is an array
        -So:U = string[]

    -Now result becomes:FlattenAllLevel<string[]>
    -Returned from ? branch

Step 2
FlattenAllLevel<string[]>
Check:
string[] extends (infer U)[]
✔ YES
U = string
Now:FlattenAllLevel<string>
Again from ? branch

Step 3 (Base Case)
FlattenAllLevel<string>
Check:string extends (infer U)[]
NO (string is not array)
So it goes to-->: T
Returns:string
Returned from : branch


*/
//Q10-Flatten All level Array, returning type
type FlattenAllLevel<T>=T extends (infer U)[]?FlattenAllLevel<U>:T;
type FAL1 = FlattenAllLevel<string[][]>;  // string
type FAL2 = FlattenAllLevel<string[][][]>;  // string
type FAL3 = FlattenAllLevel<string>;  // string
type FAL111 = FlattenAllLevel<[1,2,[3,4]]>;  // string


//solve above question without using infer as bcz infer is not needed for above question
/*What is T[number]?
    -T[number] = “give me the type of any element inside array T whose index is of type numeric”
        -It works because arrays in TypeScript are just objects with numeric keys.
  What does [number] mean?
    -type Y = X[number];
        -This means:-Give me the type of all properties whose key is of type number
        -[number] → matches all numeric indexes (0,1,2,...)  
        -And all those indexes store string:
        -Result:type Y = string;

*/
//for array same 
type X = string[];//X is a type representing an array where every element is a string
type A10 = X[0];      // string
type B10 = X[1];      // string
type C10 = X[999];    // string
type Y10 = X[number];//Give me the type of all properties whose key is of type number // string

type X1 = string[][];
type A0 = X1[0];      // string[]
type B0 = X1[1];      // string[]
type C = X1[999];    // string[]
type Y = X1[number]; // string[]

//for tuple depends on index
type T = [string, number];//T is a type representing tuple where: -first element is string -second element is number
type A11 = T[0];      // string
type B11 = T[1];      // number
type U11 = T[number]; // string | number


//Q10-Flatten All level Array
type FlattenAllLevelWithoutInfer<T>=T extends any[]?FlattenAllLevelWithoutInfer<T[number]>:T;
type FAL11=FlattenAllLevelWithoutInfer<string[][]>;  // string

