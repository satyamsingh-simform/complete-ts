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
type User={
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
type Events={
  [K in keyof User]:`on${Capitalize<K>}change`;
}[keyof User]     






