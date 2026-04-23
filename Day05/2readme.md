<!-- Q1 extract return type from unknown third party fn-->
function thirdPartFn():{role:string; type:string}{
    return{
        role: "admim",
        type: "superadmin",
    }
}
const value=thirdPartFn();
function sendRole(role:???){
  // some logic
  console.log("Role:", role.role + " Type:", role.type);
}
sendRole(value);

<!-- ans -->
role:typeof value

<!-- better ans -->
function thirdPartFn():{role:string; type:string}{
    return{
        role: "admim",
        type: "superadmin",
    }
}
type Role=ReturnType<typeof thirdPartFn>

const value=thirdPartFn();
function sendRole(role:Role){
  // some logic
  console.log("Role:", role.role + " Type:", role.type);
}
sendRole(value);


<!-- Q2:IsArray<T>\ Input: string[]\ Output: true -->
<!-- ans -->
type IsArray<T>=T extends any[]?true:false;

type A=IsArray<number>;
type B=IsArray<string[]>;
type C=IsArray<number[]>;
type D=IsArray<boolean>;


<!-- Q3. IsFunction<T>\ Input: () => void\ Output: true-->
//all fn with/without parameter //“Is T a function type that can take any arguments and return void(means ignore return type)”

type IsFunction2<T>=T extends (...arg:any[])=>void ? true:false  
type f4=IsFunction2<(a:number)=>number>//true
type f5=IsFunction2<(a:number,b:number)=>void>//true
type F1=IsFunction2<number>;//false


<!-- Q4. -->
type Horizontal="left"|"right"
type Vertical="top"|"bottom"
type AllPos=????   // "left|top" | "left|bottom" | "right|top" | "right|bottom"
<!-- ans -->
type AllPos=`${Horizontal}${Vertical}`


<!-- Q5 -->
// type Token=???
type Token=`Bearer ${string}` //Any string that starts with "Bearer " followed by anything
type TokenNum=`Bearer ${number}`//

const bearerToken:Token="Bearer ffewhwheiheri" //VALID
const myToken:Token="something efrwgetry" // ERROR
const bearerToken2:Token="Bearer anything" //VALID


<!-- Q6 -->
<!-- Interview Question (Tricky) -->
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};
<!-- Create a type: -->
type Events = ??? 
<!-- Expected Output -->
"onNameChange" | "onAgeChange" | "onIsAdminChange"
