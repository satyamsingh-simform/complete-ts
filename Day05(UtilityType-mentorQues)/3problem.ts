/*All of these are correct function type shapes
  () => void
  (a: number) => string
  (...args: any[]) => any
  //Type structure for function
  type fn=(a:number)=>number
*/

/*Questions
    -IsArray<T>\ Input: string[]\ Output: true
    -IsFunction<T>\ Input: () => void\ Output: true
    -GetPromiseValue<T>\ Input: Promise<string>\ Output: string
    -Input: Promise<{ id: number }>\ Output: { id: number }
    -TupleFirst<T>\ Input: [string, number, boolean]\ Output: string
    -Input: ["GET", "/users"]\ Output: "GET"
*/
//Q1.IsArray<T>\ Input: string[]\ Output: true
type IsArray<T>=T extends any[]?true:false;
type A=IsArray<number>;
type B=IsArray<string[]>;
type C=IsArray<number[]>;
type D=IsArray<boolean>;


//Q2.IsFunction<T>\ Input: () => void\ Output: true
type IsFunction<T>=T extends ()=>any ?true:false; //this type will only works for fn having 0 parameter 
type f51=IsFunction<(a:number,b:number)=>void>//false
type F1=IsFunction<number>;
type F2=IsFunction<()=>{}>;
type F3=IsFunction<(a:number)=>string>

type IsFunction2<T>=T extends (...arg:any[])=>void ? true:false  //all fn with/without parameter //“Is T a function type that can take any arguments and return void(means ignore return type)”
type f4=IsFunction2<(a:number)=>number>
type f5=IsFunction2<(a:number,b:number)=>void>

type IsFunction3<T>=T extends (...arg:any[])=>number ? true:false  //Is T a function type that can take any arguments and return number(anything other than no will taken as false)
type G1=IsFunction3<(a:number)=>string>//false
type G2=IsFunction3<(a:number)=>number>//true
function abc(){}
type G3=IsFunction3<typeof abc>
type G31=IsFunction<typeof abc>


//Q.write return logic in isEmployee
type User = {
    name: string,
    email: string,
    phone: string
}
type Employee = User & { code: string }
function isEmployee(value: any): value is Employee {
    return value && 'code' in value?true:false;
}
const obj:any={name:"abc",email:"abc@gmail.com",phone:"234567",code:"2222"}

if(isEmployee(obj)){
    console.log('obj is of employee')
}

//Q.Find the return type of thirdPartFn
function thirdPartFn():{ role: string, type: string }{
return {
    role:"admim",
    type:"superadmin"
}
}
const value=thirdPartFn();
function sendRole(role:ReturnType<typeof thirdPartFn>){
    // some logic
}
sendRole(value)

//Q
const fakeData={
  String:"Default string",
  Numbers:{
  Int:1,
  Float: 3.14,
  },
  Boolean:true,
  Id:"id"
 }
//  type StringType=??? //it should be same type as one from fakeData's String key
//  type Int=??? //it should be same type as one from fakeData's Numbers.Int key
//  type Float=??? //it should be same type as one from fakeData's Numbers.Float key
//  type BooleanType=??? //it should be same type as one from fakeData's Boolean key
//  type Id=??? //it should be same type as one from fakeData's Id key
type TypeOfFakeData=typeof fakeData;
type TypeString=typeof fakeData['String'];
type TypeNumbers=typeof fakeData['Numbers'];
type TypeNumbersInt=typeof fakeData['Numbers']['Int']


//Q3.
type Horizontal="left"|"right"
type Vertical="top"|"bottom"
// let hori11="left"|"right";
// type AllPos=????   // "left|top" | "left|bottom" | "right|top" | "right|bottom"
type AllPos=`${Horizontal}${Vertical}`


//Q4 type Token=???
type Token=`Bearer ${string}` //Any string that starts with "Bearer " followed by anything
type TokenNum=`Bearer ${number}`//
const bearerToken:Token="Bearer ffewhwheiheri" //VALID
const myToken:Token="something efrwgetry" //ERROR
const bearerToken2:Token="Bearer anything" //VALID


//Q.S <!-- Interview Question (Tricky) -->
type User111={
  name: string;
  age: number;
  isAdmin: boolean;
};
// <!-- Create a type: -->
// type Events = ??? 
// <!-- Expected Output -->
// "onNameChange" | "onAgeChange" | "onIsAdminChange"

//why this error do check once
type E<T>={
  [K in keyof T]:`on${K}Change`
}
//type Events = "onNamechange" | "onAgechange" | "onIsAdminchange"
type Events111={
  [K in keyof User]:`on${Capitalize<K>}change`;
}[keyof User] //for union of keys use keyof     


//Q5Give email data using type user
type EmailUser = {
  name: string,
  age: number,
  email: {
    domain: string,
    length: number
  }
}

type Users = EmailUser[]

type IWantEmailData=EmailUser['email']
type IWantEmailData2=Users[0]['email']
type IWantEmailData3=Users[number]['email'] //check Day3e infer vs cond, to know how it worked


/*when to use keyof
    -If you already have union of keys → use K in Keys
      -type Keys = "name" | "age";
      -This is already:union so use -->[K in Keys]

    -If you have object type → use [K in keyof Object]
      -type User = {
        name: string;
        age: number;
      };
      -here you have to use this :[K in keyof User]
*/


/*What does extends mean in types?
    -In type context, extends means:
    -“Is assignable to?” / “Does it match this type?”

  why TS does not support if else
    -if-else is runtime JS, but types use extends ? : for compile-time logic
    -extends ? : is not JS ternary — it's a type expression, and types only allow expressions, not statements
*/


//Q.S
type Keys = "id" | "isAdmin" | "username";

/* create a type:Obj
Requirement
"id" → number
"isAdmin" → boolean
"username"->string
*/
type Obj={
  [K in Keys]:K extends 'id'?number:K extends 'isAdmin'?boolean:string;
}


// QS.trick question
/*
Requirement:
"id" → number
"isAdmin" → boolean
"username" → string
"createdAt" → Date
type Obj = ???
*/
type Keys2 = "id" | "isAdmin" | "username" | "createdAt";
//solution 1
type Obj11={
  [k in Keys2]:k extends 'id'?number:k extends 'isAdmin'?boolean:k extends 'username'?string:Date; 
}

//solution 2
type Map1={
  id:number,
  isAdmin:boolean,
  username:string,
  createdAt:Date,
}



// MENTOR QUESTION

//Q6. create a type where key is from AllKeys's type and value is string
type AllKeys="userId"|"role"|"email"|"phone"|"dob"
 
type AllWithString=Record<AllKeys,string>
/**
{
    userId: string;
    role: string;
    email: string;
    phone: string;
    dob: string;
}
*/

// Q7
// same as previous question but all key's should be in uppercase
type Events="log_in"|"log_out"|"sign_up";
 
type AllEvents=Record<Uppercase<Events>,string>
/**
{
    LOG_IN: string;
    LOG_OUT: string;
    SIGN_UP: string;
}
*/

//Q8
//create Maybe generic type that recieves any(not typescript any, here any means any kind of type) type, and it returns actual type with null and undefined
type Maybe<T>=T|undefined|null
type StringCanBe=Maybe<string>  // string | null |undefined
type NumberCanBe=Maybe<number>

//Q9
// create a generic type that only accepts string and attach "/" prefix to given string
type AddPrefix<T extends string>=`/${T}`
type Addd=AddPrefix<"about"> // output will be: "/about"
type Add=AddPrefix<2> // ts error

//Q10
// create maybe type that receives any type(not typescript any, here any means any kind of type) except null and undefined
type Maybe1<T>=T extends null | undefined ?never:T
type StringCan=Maybe1<string>  // string | null |undefined
type ZeroCanbe=Maybe1<0>  // 0 | null |undefined
type EmptyStringCanbe=Maybe1<"">  // "" | null |undefined
type NullCanbe=Maybe1<null>  // TS error
type UndefinedCanbe=Maybe1<undefined>  // TS error

type MayBe<T>=T extends {}?T:never; //{}-->// means "any non-nullish value"
type be=MayBe<number>
type be2=MayBe<null>


//Q11
// modify createDataShape type and make it genetric so that it creates shape of {data:... , error:...} as per the received type
/*
  {data:string, error:TypeError}
  {data:boolean, error:SyntaxError}
  {data:boolean, error:SyntaxError}

*/
type CreateDataShape<T,E='typeError'>={
  data:T,
  error:E
}
type MyShape=CreateDataShape<string,TypeError> 
type MyShape2=CreateDataShape<boolean,SyntaxError>

// modify above question such that if no Error type is passed then defaul error type will be TypeError.
type MyShape3=CreateDataShape<boolean>
 


/*How to recognize this type of question
    Pattern in question	Concept
      -“string manipulation”	      template literal types
      -“extract part of string”	    infer
      -“split string”	              ${infer A} ${infer B}

*/
//INFER-->see day3e infer vs condition

//Mentor Question
//Q12
// create a generic type GetSurname that  recieves string as argument and it returns second string as type
type Names=["virat kohli","rohit sharma", "shreyas iyer"]
type GetSurname<T>=T extends `${infer first} ${infer last}`?last:never;
type IsKohli=GetSurname<Names[0]>; //"kohli"
type IsSharma=GetSurname<Names[1]>; // "sharma"
type IsIyer=GetSurname<Names[2]>; // "iyer"

//QS
//get last name with _
type Names2=["virat_kohli","rohit_sharma", "shreyas_iyer"]
type GetLastName<T>=T extends `${infer first}_${infer last}`?last:never
type IsKohl=GetLastName<Names2[0]>; //"kohli"

//Get First Name
type GetFirstName<T>=T extends `${infer First} ${infer _}`?First:never;
type a1=GetFirstName<"Virat Kholi">

//Get first character
type GetFirstChar<T>=T extends `${infer First}${infer L}`?First:never;
type c1=GetFirstChar<"Virat">

//Remove first character
type RemoveFirstChar<T>=T extends `${infer First}${infer L}`?L:never;
type c11=RemoveFirstChar<"Virat">

//Get last character
type GetLastChar<T>=T extends `${infer F}${infer rest}`?rest extends ""?F:GetLastChar<rest>:never;
type A2 = GetLastChar<"hello">; // "o"

//Q13
/*
  type MyHello= GetDataValue<{data:"hello"}> // "hello"
  type MyNumber= GetDataValue<{data:1}> // 1
  type MyValidType= GetDataValue<{data:{isValid:boolean}}> // {isValid:boolean}  
*/

//Mentor question
type GetDataValue<T extends {}>={
  [P in keyof T]:T[P]
}[keyof T]

type MyHello= GetDataValue<{data:"hello"}> // "hello"
type MyNumber= GetDataValue<{data:1,age:20}> // solution fails here
type MyValidType= GetDataValue<{data:{isValid:boolean}}> // {isValid:boolean}

//better solution 
type GetData<T>=T extends {data:any} ? T['data']:never;
type GetData2<T>=T extends {data:infer P}?P:never;
type MyNum1= GetData<{data:1}> // 1
type MyNum2= GetData<{data:1,age:20}> // 1
type MyNum3= GetData<{data:1,age:20}> // 1


//Q14
/*
type AA = TupleToUnion<["a", "b", "c"]>; // "a" | "b" | "c"

type Admin=APIRoutesVersion<"/api/admin/api/","1.0">  //"/api/1.0/admin/api/1.0/" 
type Users=APIRoutesVersion<"/api/users/","2.0"> // "/api/2.0/users/"
type SuperAdmins=APIRoutesVersion<"/api/super-admins/","3.0"> // "/api/3.0/super-admins/"
*/
type TupleToUnion1<T extends any[]>=T[number] //T[number]:Give me the type of all properties whose key is of type number  //T[number] = union of all tuple values
type AA = TupleToUnion1<["a", "b", "c"]>;//A tuple type with 3 positions, whose types are the string literals "a", "b", and "c"   // "a" | "b" | "c"

// type TupleToUnion21<T>=T extends [infer F, ...infer Rest]?F|TupleToUnion2<Rest>:T
type TupleToUnion2<T>=T extends [infer F, ...infer Rest]?F|TupleToUnion2<Rest>:never
type AA1 = TupleToUnion2<["a", "b", "c"]>


type TupleToUnion3<T extends any[]>=T[number];
type AAA = TupleToUnion3<["a", "b", "c"]>
/*any is required
  -type TupleToUnion<T extends string[]> = T[number];
    -type A = TupleToUnion<['a', 'b', 'c']>; // works
    -type B = TupleToUnion<[1, 2, 3]>;       // error  //[1,2,3] is number[]  But you forced T extends string[]
*/

//Q15
/*
  type Admin=APIRoutesVersion<"/api/admin/api/","1.0">  //"/api/1.0/admin/api/1.0/" 
  type Users=APIRoutesVersion<"/api/users/","2.0"> // "/api/2.0/users/"
  type SuperAdmins=APIRoutesVersion<"/api/super-admins/","3.0"> // "/api/3.0/super-admins/"

*/
/*flow
"/api/admin/api/"
→ split → "" + "/api/" + "admin/api/"
→ recurse

"admin/api/"
→ split → "admin" + "/api/" + ""
→ recurse

"" → stop

combine back →
"/api/1.0/admin/api/1.0/"

*/

//Check if string T can be split into: [before] + "/api/" + [after]
type APIRoutesVersion<T extends string,V extends string>=T extends `${infer Befor}/api/${infer After}` ? `${Befor}/api/${V}/${APIRoutesVersion<After,V>}` :T;
type Admin=APIRoutesVersion<"/api/admin/api/","1.0">
type Admin2=APIRoutesVersion<"/admin/api/","1.0">


//Q16
/*dry run
ReverseString<'hello'>
= ReverseString<'ello'> + 'h'
= ReverseString<'llo'> + 'e' + 'h'
= ReverseString<'lo'> + 'l' + 'e' + 'h'
= ReverseString<'o'> + 'l' + 'l' + 'e' + 'h'
= 'o' + 'l' + 'l' + 'e' + 'h'
= 'olleh'
*/

// given a string,reverse it and return it as type (recursion + infer)
// type ReverseString<T extends string>=unknown;
type ReverseString<T extends string>=T extends `${infer FirstChar}${infer Rest}`?`${ReverseString<Rest>}${FirstChar}`:T
type R1 = ReverseString<'hello satya'> // R1 should be 'olleh'


// Q17
// given nested array, flatten it! (recursion + infer)
// type FlattenOnce<T extends any[]>=unknown
// type FlattenOnce<T>=T extends any[]?FlattenOnce<T[number]>:T; //T[number] = “give me all element types
type FlattenOnce2<T extends any[]>=T extends [infer F, ...infer Rest]?F extends any[]?[...FlattenOnce2<F>,...FlattenOnce2<Rest>]:[F,...FlattenOnce2<Rest>]:T
type F11 = FlattenOnce2<[1, 2, [3, 4], [5]]> //F1 should be [1,2,3,4,5]  //type F11 = 1 | 2 | 3 | 4 | 5


// Q18
// given string, trim left spaces. (recursion + infer)
type TrimLeft2<T extends string>=T extends ` ${infer rest} `?TrimLeft<rest>:T;//for start & end space removal
type TrimLeft<T extends string>=T extends ` ${infer Rest}`?`${TrimLeft<Rest>}`:T
type trimmed = TrimLeft<'  Hello World  '>  // type of trimmed should be "Hello World  "

//Q.S
/*


*/
//1.Remove all /api/
type RemoveAPI<T>=T extends `${infer F}/api${infer Rest}`?`${F}${RemoveAPI<Rest>}`:T;
type A11=RemoveAPI<"/api/admin/api/">;// "/admin/"
type A21=RemoveAPI<"/admin/api/">;    // "/admin/"

//2.Replace all /api/ with /v1/
type ReplaceAPI<T,V extends string>=T extends `${infer F}/api/${infer Rest}`?`${F}${V}${ReplaceAPI<Rest,V>}`:T;
type AR = ReplaceAPI<"/api/admin/api/",'/v1/'>;// "/v1/admin/v1/"

//3.Count occurrences of /api/
type CountAPI<T extends string,C extends any[]=[]>=T extends `${infer F}/api/${infer Rest}`?CountAPI<Rest,[1,...C]>:C['length'];
type A01 = CountAPI<"/api/admin/api/">; // 2
type A02 = CountAPI<"/api/admin/api/admin/api/">; // 2

//arithmetic operator are run-time not supported for TS
//type CountAPI2<T extends string,C extends number>=T extends `${infer F}/api/${infer Rest}`?CountAPI<Rest,C++>:C

/*infer is greedy
Option 1
Before = "hello"
"hello" + "/" = "hello/" not full string
Option 2
Before = "hello//"
"hello//" + "/" = "hello///" ✔ match
*/
//4.Remove trailing slashes
type RemoveTrailingSlash<T>=T extends `${infer Befor}/`?RemoveTrailingSlash<Befor>:T
type A91=RemoveTrailingSlash<"hello///">; // "hello"

//5.Convert path to array
type SplitPath<T>=T extends `${infer B}/${infer Rest}`?`${B}${SplitPath<Rest>}`:T
type A08 = SplitPath<"/api/admin/users">;// ["api", "admin", "users"]

//6. Reverse a string
type Reverse<T>=T extends `${infer F}${infer Rest}`?`${Reverse<Rest>}${F}`:T
type A07 = Reverse<"abc">; // "cba"

// Q19
//Input
const obj11={
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [{ name: null, value: undefined }, 2],
  },
};

//Output
/*
{
  "A": "12",
  "B": 23,
  "C.O.L": 56,
  "C.P": 23,
  "C.Q.0.name": null,
  "C.Q.0.value": undefined,
  "C.Q.1": 2
}*/

//Q20
// in below function in argument we recieves array of any(not typescript any).
// we want to make it typesafe in such a way that typescript should throw error if array is empty.
type NonEmptyArray<T>=[A, ...B[]]

const ourArr=(myArr:NonEmptyArray)=>{
  console.log(myArr);
}
ourArr(["golang"]) // works
ourArr([true]) // works
ourArr([]) // ERROR

/*doubt
If you force literal type
ourArr(["golang"] as const);

Now type becomes:

readonly ["golang"]

Then:

T = "golang"


*/