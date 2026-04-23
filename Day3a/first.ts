interface Person1{
    name:string,
    age:number,
    gender:string,
    aadhar?:number  //? this means optional, aadhar become optional key
}


const p1:Person1={
    name:"Rohit",
    age:20,
    gender:"Male",  
}
const p2:Person1={
    name:'renu',
    age:23,
    gender:'female',
    aadhar:99932768187,
}
p2.name='ritu';//allowed


// Partial: All property becomes optional
// Required: ALl property should be filled
// Readonly: The property can only be read, write option is not available

interface customer{
    name:string,
    age:number,
    balance:number
}


const c1:Readonly<customer>={
    name:"Rohit",
    balance:210,
    age:20
}
// c1.name='abhi';  //not allowed as it is readOnly

//cant be modified
const c2:Readonly<customer>={  //c2 now cant be modified
    name:'billa',
    age:23,
    balance:1000,
}

//all property become partial
const c3:Partial<customer>={
    name:'not required',
    balance:100,
}

//all poperty become mandatory
const c4:Required<customer>={
    name:"abhi",
    age:22,
    balance:0,
}



// array of Objects

interface peopele {name:string,age:number};
interface manager {salary:number,id:string}

const arr: (peopele | manager)[] = [{name:"Rohit",age:20},{name:"Mohit",age:18}, {salary:20,id:"2321"}]

// interface peopele{address:string};
interface peopele{address?:string};

const arr2:(peopele | manager)[]=[{name:"Rohit",age:20,address:'jsr'}]




// // function in TS
function greet(a:number):number{
    console.log(a);
    return a+5;
}
console.log(greet(10));

//return type:number
function greet2(a:number){
    return a;
}
//return type:void-->if not return anything by default the return type become void;
function greet3(a:number){
    console.log(a);
}

/*//error as return type is void but i am returning no.
function meet(msg:string,val:number):void{
    console.log(msg,val);
    return val;
}
meet("Anshika Verma", 4);
*/


// default parameter
function neet(msg:string ="Jit"){
    console.log(msg);
}
neet();
neet("Bittu");


// Optional Parameter
function GATE(person?:string){
    console.log(person||"Mohan");
}
GATE("Rohit");
GATE();



//ARROW FUNCTION
const sum = (a:number,b:number):number=>{
    return a+b;
}
console.log(sum(3,4));

const sub=(a:any,b:any)=>{
    console.log(b-a);
}
sub(4,5)

// implicit type any
const sub2=(a,b)=>{
    console.log(b-a);
}
sub(4,5)



//callback function
type chill = (amount:number)=>void;
type func=(amount:number)=>number;

const sqaureroot = (val:number)=>{
   return val*val;
}

function placeOrder(order:number,callback:chill):void{
    const amount:number = order+10;
    callback(amount);
}
placeOrder(10,(amount)=>{
    console.log(amount);
})

function cllback(amt:number, callback:func):number{
    return callback(amt);
}
cllback(100,sqaureroot);



// Rest Parameter
function total(...arr:number[]){
   let ans:number = 0 ;
   arr.forEach((val:number)=>ans = ans+val);
   console.log(ans);    
}
total(2,3,1,4,123,1,12,10);




// extend keyword

interface human{
    name:string,
    age:number
};

interface Teacher extends human{
   salary:string,
   id:number
}

interface BankEmployee extends human{
    salary: string,
    position: string
}

const obj8:Teacher = {
    name :"Rohit",
    age: 20,
    salary:"chillar",
    id:123
}







