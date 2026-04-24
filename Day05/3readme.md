<!-- //partial pollyfills -->
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


<!-- //readOnly -->
type myReadOnly<T>={
    readonly[K in keyof T]:T[K];
}
type readOnlyy=myReadOnly<User100>;


<!-- //required -->
type User101={
    name?:string,
    age:number,
    city?:string
}
type myRequired<T>={
    [K in keyof T]-?:T[K]
}
type required=myRequired<User101>



