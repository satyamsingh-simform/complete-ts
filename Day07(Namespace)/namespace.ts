/*Namespace
    -It is a way to group related code under a single name
    -It was a older way to use fn or variable from one file to another befor import/export

  Namespace need
    -Name conflicts happen easily
    -Global scope gets polluted->to many variable in global scope

  Namespace creates a GLOBAL object
    namespace MySpace1 {
      export function greet() {}
    }

    becomes (simplified JS):
    var MySpace1 = {
      greet: function () {}
    };
*/
/*
file1.js
var greet = function () {
  console.log("User greet");
};

file2.js
var greet = function () {
  console.log("Admin greet");
};

Problem:
    Both attach to window.greet
    Second file overwrites first

Modern JS:
Each file is isolated
No global pollution
 Namespace becomes unnecessary
*/
namespace MySpace1{
    const city='jsr';
    export const val=100;

    export function greet(){
        return "Hello";
    }
}

namespace MySpace2{
    export const val=200;
}

console.log(MySpace1.val);
console.log(MySpace1.greet());

// MySpace1.city


/*Namespace vs Modules
    -Namespaces are mostly used in older TypeScript code or internal libraries.  Modern projects use ES Modules.
    -import
    -Scope
    -Recommended
*/

/*Declaration Merging
    -When multiple declarations with the same name are combined into a single definition.
    -Same namespace can be split:

*/
namespace MyUtil1{
    export const city='jsr'
}
namespace MyUtil1{
    export const age=22
}
console.log(MyUtil1.city);
console.log(MyUtil1.age);
