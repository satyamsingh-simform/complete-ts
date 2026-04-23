/*Core Difference (1-line each)
    -keyof → gives keys--->  of [type | interface | object types (inline) | typeof (from variables) | mapped / utility types]
    -typeof → gives type of a value
    -Indexed Access (T["key"]) → gives type of a property

*/

/*TypeScript typeof
    -it does not works with type
    -typeof is used to get the type of whole object or (type of single key of obj also) in TypeScript
    -typeof only used with value and keyof only used with type
    -UserType is a type ,Types do NOT exist at runtime
    -console.log(UserType); cant be done

*/

type User101={name:string,age:number};

const user1:User101 = { name: "satya", age: 21 };
type UserType2 = typeof user1;
type userTypeName=typeof user1['name'];
type userTypeAge=typeof user1['age'];
type wrong=typeof User101;  //typeof in TypeScript works on values (runtime things) It does NOT work on types
// type typeT=typeof User101; //error bcz typeof only used with value and keyof only used with type

//Real Use Cases of typeof
const user11 = {
    name: "satya",
    age: 21
};
type UserType = typeof user11;//this will be removed when converted to TS

function printUser(u: UserType) {
    console.log(u.age);
    console.log(u.name);
}
printUser(user11)


const fakeData = {
  String: "Default string",
  Numbers: {
    Int: 1,
    Float: 3.14,
  },
  Boolean: true,
  Id: "id"
};

type TypeOfFakeData=typeof fakeData;
type TypeString=typeof fakeData['String'];
type TypeNumbers=typeof fakeData['Numbers'];
type TypeNumbersInt=typeof fakeData['Numbers']['Int']

// Value-level (runtime)
const val = fakeData["Numbers"]["Int"]; //same fakeData.Numbers.Int  // ✔ 1

const arr=['10','satya',100];
type arr0= typeof arr['10']





/*Indexed Access Types
    -Indexed Access Type = accessing a type using a key
    -Indexed Access lets you reuse property types instead of rewriting them
    -Indexed Access = get type of a property using its key

*/

type User = {
    name: string;
    age: number;
};
const user111:User = {
    name: "satya",
    age: 21
};

type Name = User["name"];//“Give me the type of property name from User”
type TypeName= typeof user111['name'] //give types of value in user111
type Info = User["name" | "age"];

//real usecase
function getValue(obj:User, key: keyof User): User[keyof User] {    //keyof User="name" | "age"
    return obj[key];
}
getValue(user111,"name")





