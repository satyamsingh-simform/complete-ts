


//1.Partial<T>
type User={
  name:string,
  age:number,
  isAdmin:boolean,
}
type PartialUser=Partial<User>
const obj1:PartialUser={
  name:'satya',
  age:20,
}
const obj2:User={
  name:"satya",
  age:20,
  isAdmin:true,
}



//2.ReadOnly<T>

//3.Required<T>

//4.Pick<T,K>
type User2={
  name:string,
  age:number,
  city:string,
}

type NameCity=Pick<User2,'name'|'city'>
const nameCity:NameCity={
  name:'satya',
  city:'jsr',
}

//5.Omit<T,K>
type NoCity=Omit<User2,'city'>
const noCity:NoCity={
  name:'Satya',
  age:20,
}


