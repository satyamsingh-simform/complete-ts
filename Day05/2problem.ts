/*Type for this function
*/
type fn=(a:number)=>number
const arro:fn=(a)=>{
  return 5;
}


//IsArray<T>\ Input: string[]\ Output: true
type IsArray<T>=T extends any[]?true:false;

type A=IsArray<number>;
type B=IsArray<string[]>;
type C=IsArray<number[]>;
type D=IsArray<boolean>;


/*All of these are function shapes
  () => void
  (a: number) => string
  (...args: any[]) => any

*/
// IsFunction<T>\ Input: () => void\ Output: true

// type IsFunction<T> = T extends (...args: any[]) => any ? true : false;
type IsFunction<T>=T extends ()=>any ?true:false; //fn without any parameter check
type IsFunction2<T>=T extends (...arg:any[])=>void ? true:false  //all fn with/without parameter //“Is T a function type that can take any arguments and return void(means ignore return type)”

type F1=IsFunction<number>;
type F2=IsFunction<()=>{}>;
type F3=IsFunction<(a:number)=>string>

type f4=IsFunction2<(a:number)=>number>
type f5=IsFunction2<(a:number,b:number)=>void>

type IsFunction3<T>=T extends (...arg:any[])=>number ? true:false  //Is T a function type that can take any arguments and return number(anything other than no will taken as false)

type G1=IsFunction3<(a:number)=>string>//false
type G2=IsFunction3<(a:number)=>number>//true
function abc(){}
type G3=IsFunction3<typeof abc>



type Horizontal="left"|"right"
type Vertical="top"|"bottom"
// type AllPos=????   // "left|top" | "left|bottom" | "right|top" | "right|bottom"
type AllPos=`${Horizontal}${Vertical}`

// type Token=???
type Token=`Bearer ${string}` //Any string that starts with "Bearer " followed by anything
type TokenNum=`Bearer ${number}`//

const bearerToken:Token="Bearer ffewhwheiheri" //VALID
const myToken:Token="something efrwgetry" // ERROR
const bearerToken2:Token="Bearer anything" //VALID



// <!-- Interview Question (Tricky) -->
type User111={
  name: string;
  age: number;
  isAdmin: boolean;
};
// <!-- Create a type: -->
// type Events = ??? 
// <!-- Expected Output -->
// "onNameChange" | "onAgeChange" | "onIsAdminChange"

//wrong thought
// type Events={
//   [K in keyof User]:User[K];
// }

//type Events = "onNamechange" | "onAgechange" | "onIsAdminchange"
type Events111={
  [K in keyof User]:`on${Capitalize<K>}change`;
}[keyof User]     


// Q
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
type IWantEmailData3=Users[number]['email']


/*when to use keyof
    -If you already have union of keys → use K in Keys
      -type Keys = "name" | "age";
      -This is already:union so use -->[K in Keys]

    -If you have object type → use K in keyof Object
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


//Q
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


// Q.trick question
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
  [k in Keys2]:k extends 'id'?number:k extends 'isAdmin'?boolean:k extends 'username'?string:Date; //not a good approaches
}

//solution 2
type Map1={
  id:number,
  isAdmin:boolean,
  username:string,
  createdAt:Date,
}
type Obj111={
  [K in keyof Map1]:Map1[K]
}



// MENTOR QUESTION

// create a type where key is from AllKeys's type and value is string
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

// Q
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

//Q
//create Maybe generic type that recieves any(not typescript any, here any means any kind of type) type, and it returns actual type with null and undefined

type Maybe<T>=T|undefined|null

type StringCanBe=Maybe<string>  // string | null |undefined
type NumberCanBe=Maybe<number>


// create a generic type that only accepts string and attach "/" prefix to given string
type AddPrefix<T extends string>=`/${T}`

type Addd=AddPrefix<"about"> // output will be: "/about"
type Add=AddPrefix<2> // ts error



// create maybe type that receives any type(not typescript any, here any means any kind of type) except null and undefined
 
type Maybe1<T>=T extends null | undefined ?never:T
 
type StringCan=Maybe1<string>  // string | null |undefined
type ZeroCanbe=Maybe1<0>  // 0 | null |undefined
type EmptyStringCanbe=Maybe1<"">  // "" | null |undefined
type NullCanbe=Maybe1<null>  // TS error
type UndefinedCanbe=Maybe1<undefined>  // TS error


// modify createDataShape type and make it genetric so that it creates shape of {data:... , error:...} as per the received type
// ex.
type CreateDataShape<T,E='typeError'>={
data:T,
error:E
}
 
type MyShape=CreateDataShape<string,TypeError> 
/*
  {data:string, error:TypeError}
*/
  type MyShape2=CreateDataShape<boolean,SyntaxError>
  /*
  {data:boolean, error:SyntaxError}
*/

// modify above question such that if no Error type is passed then defaul error type will be TypeError.
 
  type MyShape3=CreateDataShape<boolean>
  /*
  {data:boolean, error:SyntaxError}
*/