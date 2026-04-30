"use strict";
/*Namespace
    -It is a way to group related code under a single name

  Namespace need
    -Global scope gets polluted
    -Name conflicts happen easily
*/
var MySpace1;
(function (MySpace1) {
    const city = 'jsr';
    MySpace1.val = 100;
    function greet() {
        return "Hello";
    }
    MySpace1.greet = greet;
})(MySpace1 || (MySpace1 = {}));
var MySpace2;
(function (MySpace2) {
    MySpace2.val = 200;
})(MySpace2 || (MySpace2 = {}));
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
    -Same namespace can be split:

*/
var MyUtil1;
(function (MyUtil1) {
    MyUtil1.city = 'jsr';
})(MyUtil1 || (MyUtil1 = {}));
(function (MyUtil1) {
    MyUtil1.age = 22;
})(MyUtil1 || (MyUtil1 = {}));
console.log(MyUtil1.city);
console.log(MyUtil1.age);
