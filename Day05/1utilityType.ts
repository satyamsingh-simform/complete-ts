/*Utility Types
1.Partial<T>
    -Makes all properties optional
    -Useful when: updating object partially


2.Required<T>
    -Makes all properties required
    -Opposite of Partial


3.Readonly<T>
  -Makes all properties immutable


4.Record<K,T>
  -Record<K, T> creates an object type with keys K and all values of type T
  -Take these keys → assign same type to all of them
  -what i want is for name type should be string and for age type should be number
    -Record cannot assign different types to different keys

4.Pick<T, K>
    -Pick<T, K> creates a new type by selecting specific keys K from type T
    -Take these keys → copy their types from original object
    -It preserves original types ,It removes unwanted properties
    -Pick cannot change types, it only selects existing ones

5.Omit<T, K>
  -Remove specific properties
  -Opposite of Pick


//6.ReturnType<T>

//7.Capitalize<T>

//8.Parameters<T>
*/


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

//4.Record<K,T>
type obj=Record<'name'|'age',string>;
const realObj:obj={
  name:'satya',
  age:'20'
}

// what i want is for name type should be string and for age type should be number

//4.Pick<T,K>
type User2={
  name:string,
  age:number,
  city:string,
}

type NameCity=Pick<User2,'name'|'age'>
const nameCity:NameCity={
  name:'satya',
  age:20,
}

//5.Omit<T,K>
type NoCity=Omit<User2,'city'>
const noCity:NoCity={
  name:'Satya',
  age:20,
}






