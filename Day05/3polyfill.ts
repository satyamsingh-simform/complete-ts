//partial pollyfills
type User100={
    name:string,
    age:number,
    city:string
}

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

*/


/*
4.Record<K,T>
  -Record<K, T> creates an object type with keys K and all values of type T
  -Take these keys → assign same type to all of them
  -what i want is for name type should be string and for age type should be number
    -Record cannot assign different types to different keys

 keyof any?
    It means:“What keys are allowed on any object in JavaScript?”
    In JavaScript, object keys can only be:
        -string
        -number
        -symbol
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

