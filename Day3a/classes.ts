/*Why it works in JavaScript
    -JavaScript is dynamically typed
    -You can create properties anytime
    -eg:-
        class Person {
          constructor(name, age) {
            this.name = name;   // allowed
            this.age = age;     // allowed
          }
        }
    -No prior declaration needed

Why it fails in TypeScript
    -TypeScript is statically typed
    -It needs to know properties at compile time
    -eg:-
        class Person {
          constructor(name: string, age: number) {
            this.name = name; // ❌ Error
            this.age = age;   // ❌ Error
          }
        }
*/

class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    greet():void{
        console.log(`hi ${this.name}`);
    }
}


// Blueprint of an object
const obj1 = new Person("Rohit",20);
const obj2 = new Person("Nitin",11);
console.log(obj1);
console.log(obj2);

console.log(obj1.name);
console.log(obj1.age);

obj1.greet();

// public private protected
class Customer{
    public name:string;
    private age:number;
    protected balance:number;

    constructor(name:string,age:number,balance:number){
        this.name = name;
        this.age = age;
        this.balance = balance
    }

    meet():number{
       this.age = this.age+10;
       return this.age;
    }
}

const P1 = new Customer("Deepak",20,420);
console.log(P1.name);

console.log(P1.meet());
// console.log(P1.balance);


//Yes, you cannot use private variable (age) inside Employee class ❌
// private is accessible only inside the same class (Customer)
class Employee extends Customer {
    salary:number;

    constructor(salary:number,name:string,age:number,balance:number){
        super(name,age,balance);
        this.salary = salary;
    }

    greet():void{
        console.log(this.balance);
    }

    meet():number{
        console.log("Hello Coder armu");
        return 10;
    }
}

const E1 = new Employee(420,"Rohit", 20,320);
console.log(E1.meet());
console.log(E1.salary);



/*Generic: Template
    -Generic = type as a parameter (placeholder type)
    -Allows writing reusable and flexible code
    -Type is decided at runtime usage (not fixed)
    -Written using <T> (or any name)
*/

// function value(a:(number|string|number[]|boolean)):(number|string|number[]|boolean){
//    return a;
// }


function value<T>(a:T):T{
    return a;
}
console.log(value<number>(10));
console.log(value<string>("Rohit"));
console.log(value([10,11,12,13,14]));
console.log(value(true));
console.log(value(["MOhan","Rohan"]))

function convert<T, U>(value: T, newValue: U): U {
    return newValue;
}

console.log(convert<number, string>(10, "Rohit")); // "Rohit"

interface Admin<T,U> {
    name:string,
    age:number,
    addhar:T,
    salary:U
}


const obj10: Admin<number,number> = {
    name:"Rohit",
    age:20,
    addhar:123,
    salary:23213
}

const obj11: Admin<string,number>={
    name:"Rohit",
    age:20,
    addhar:"32112",
    salary:13
}


