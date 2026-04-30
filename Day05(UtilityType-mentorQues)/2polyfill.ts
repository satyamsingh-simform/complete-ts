type User100={
    name:string,
    age:number,
    city:string
}

//partial pollyfills
type myPartial<T>={
    [K in keyof T]?:T[K];
}
type userrP=myPartial<User100>
const pUser:userrP={
    name:'satya',
    city:'jsr'
}

//readOnly
type myReadOnly<T>={
    readonly[K in keyof T]:T[K];
}
type readOnlyy=myReadOnly<User100>;

//required
type User101={
    name?:string,
    age:number,
    city?:string
}
type myRequired<T>={
    [K in keyof T]-?:T[K]
}
type required=myRequired<User101>



/*
4.Record<K,T>
  -Record<K, T> creates an object type with keys K and all values of type T
  -Take these keys → assign same type to all of them
  -what i want is for name type should be string and for age type should be number
    -Record cannot assign different types to different keys

 keyof any?
    doing keyof any give the key which are allowed ,string, number,symbol 
    It means:“What keys are allowed on any object in JavaScript?”
    In JavaScript, object keys can only be:
        -string
        -number
        -symbol
    keyof any keeps a check if 
*/

//4.Record<K,T>
type myRecord<K extends keyof any,T>={
    [P in K]:T;
}
type myObj=myRecord<1|'age',string>
const obj:myObj={
    1:'satya',
    age:'20',
}
//boolean' does not satisfy the constraint 'string | number | symbol'
type myObj2=myRecord<true|'age',string> 


//5.Pick<T,K>
type userW={
    name:string,
    age:number,
    city:string,
}
type myPick<T,K extends keyof T>={
    [P in K]:T[P]
}
type userR=myPick<userW,'name'|'city'>
//now i can create any obj by using userR type.


//6.Omit<T,K>
type myOmit<T,K extends keyof T>={
    [P in keyof T as P extends K?never:P]:T[P]
}

//7.NonNullable<T> :Remove null and undefined from a type
type MyNonNullable<T> = T extends null | undefined ? never : T;


//8.Extract<T, U> :Keep only types from T that are assignable to U
type MyExtract<T, U> = T extends U ? T : never;
type A0 = MyExtract<string | number | boolean, string | number>;
// string | number


//9.Exclude<T, U>
type MyExclude<T, U> = T extends U ? never : T;
type A8 = MyExclude<string | number | boolean, number>;
// string | boolean


//10.
type MyParamType<T>=T extends (...arg: infer P)=>any?P:never;


//11//“Match a function → ignore params → capture return type as R”
type MyReturnType<T>=T extends (...arg:any[])=>infer R?R:never;

