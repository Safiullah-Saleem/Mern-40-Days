// What will be the output of the following code?
// let x;
// console.log(x);
// output is undefinded

// Var, let and const

// ✅ var can be both updated and redeclared.
var x = 10;
var x = 20; // ✅ Redeclaration allowed
x = 30; // ✅ Reassignment allowed
console.log(x); // 30

// ✅ let can be updated but NOT redeclared in the same scope.
let y = 10;
// let y = 20; // ❌ Error: Identifier 'y' has already been declared
y = 30; // ✅ Reassignment allowed
console.log(y); // 30

// ❌ Your statement about const needs a small fix: const cannot be reassigned, but if it's an object or array, its properties/elements can be modified.
const z = 10;
// z = 20; // ❌ Error: Assignment to constant variable

const obj = { name: "Alice" };
obj.name = "Bob"; // ✅ Allowed (modifying properties of an object)
console.log(obj.name); // Bob

// Final Corrected Answer:
// var → Can be redeclared and updated. Function-scoped. Hoisted with undefined.
// let → Can be updated but not redeclared. Block-scoped. Hoisted but not initialized.
// const → Cannot be updated or redeclared, but if it's an object or array, its properties/elements can be modified. Block-scoped.

// Data types in javacript

// ✅ Primitive Data Types
var x = 10; // Number (Integer)
var pi = 3.14; // Number (Float)
var a = "Safiullah"; // String
var tur = true; // Boolean
var isAvailable = false; // Boolean
var c; // Undefined (Declared but not assigned)
var emptyValue = null; // Null (Intentional absence of value)
var uniqueID = Symbol("id"); // Symbol (Unique value)
var bigNumber = 9007199254740991n; // BigInt (Large numbers)

// ✅ Non-Primitive (Reference) Data Types
var arr = ["Safiullah", "Saleem"]; // Array
var obj = { name: "Safiullah", age: 22 }; // Object
function greet() {
  return "Hello, Safiullah!";
} // Function

// ✅ Console Output
console.log(x); // Output: 10 (Number)
console.log(pi); // Output: 3.14 (Number)
console.log(y); // Output: "Safiullah" (String)
console.log(tur); // Output: true (Boolean)
console.log(isAvailable); // Output: false (Boolean)
console.log(z); // Output: undefined
console.log(emptyValue); // Output: null
console.log(uniqueID); // Output: Symbol(id)
console.log(bigNumber); // Output: 9007199254740991n
console.log(arr); // Output: ["Safiullah", "Saleem"] (Array)
console.log(obj); // Output: { name: "Safiullah", age: 22 } (Object)
console.log(greet()); // Output: "Hello, Safiullah!" (Function return value)

// null and undefined
// Example of undefined
let a;
console.log(a); // Output: undefined

// Example of null
let b = null;
console.log(b); // Output: null

// Checking the data types
console.log(typeof 10); // Output: "number"
console.log(typeof "Safiullah"); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object"  // (JavaScript bug!)
console.log(typeof Symbol("id")); // Output: "symbol"
console.log(typeof 9007199254740991n); // Output: "bigint"

console.log(typeof ["apple", "banana"]); // Output: "object" (Arrays are objects)
console.log(typeof { name: "Safiullah" }); // Output: "object" (Objects)
console.log(typeof function () {}); // Output: "function" (Functions)

const name = "Safiullah";
name = "Saleem"; // ❌ This will cause an error!
console.log(name);

let obj1 = { name: "John" }; // obj1 stores a reference to the object
let obj2 = obj1; // obj2 now holds the same reference as obj1
obj2.name = "Doe"; // Modifies the object at the same reference
console.log(obj1.name); // Output: "Doe"

// Why?
// obj1 and obj2 are pointing to the same memory location.
// When you update obj2.name = "Doe", it also affects obj1 because both obj1 and obj2 refer to the same object in memory.

// ### **🔍 Review & Feedback on Your Answers**

// 1️⃣ **Function Hoisting - `test()` Function**
// ```javascript
// function test() {
//     console.log(x);
//     var x = 10;
// }
// test();
// ```
// **Your Expected Output:** `10`
// **✅ Correct Output:** ❌ **`undefined` (Not `10`)**

// ### **🔍 Explanation:**
// - `var` is **hoisted**, meaning `x` is moved to the top but remains **uninitialized**.
// - The execution context sees `var x;` at the top but doesn't assign `10` until later.
// - So, `console.log(x);` **logs `undefined`** instead of `10`.

// ✔ **Correct Understanding:**
// ```javascript
// function test() {
//     var x; // Hoisted but uninitialized
//     console.log(x); // Logs undefined
//     x = 10; // Value assigned
// }
// test();
// ```

// ---

// 2️⃣ **Function Reference vs. Invocation**
// ```javascript
// function sayHi() {
//     return "Hello";
// }
// console.log(sayHi);
// console.log(sayHi());
// ```
// **Your Expected Output:** ✅ **Correct!**
// ✔ `console.log(sayHi);` **(Outputs function reference)** → `[Function: sayHi]`
// ✔ `console.log(sayHi());` **(Outputs function return value)** → `"Hello"`

// ---

// 3️⃣ **For Loop Output**
// ```javascript
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// ```
// **Your Expected Output:** ❌ `1,2,3,4,5`
// **✅ Correct Output:** `0,1,2,3,4`

// ### **🔍 Explanation:**
// - `i` starts at `0`, increments after each iteration.
// - **Stops at `4` because `i < 5` condition fails when `i` reaches `5`.**

// ✔ **Corrected Expectation:**
// ```
// 0
// 1
// 2
// 3
// 4
// ```

// ---

// 4️⃣ **For-Of Loop with Array Multiplication**
// ```javascript
// let arr = [1, 2, 3, 4, 5];
// for (let num of arr) {
//     console.log(num * 2);
// }
// ```
// **Your Expected Output:** ✅ **Correct!**
// ✔ **Output will be:** `2, 4, 6, 8, 10`

// ---

// 5️⃣ **While Loop Output**
// ```javascript
// let i = 0;
// while (i < 3) {
//     console.log(i);
//     i++;
// }
// ```

// ✔ **Output:** `0, 1, 2`

// ---

// ### **🔎 Final Feedback Summary**
// ✅ **You're doing great! Just be careful with hoisting and loop conditions.**
// 🔸 **Small Mistake:** The `for` loop outputs `0,1,2,3,4`, not `1,2,3,4,5`.
// 🔸 **Important Concept:** `var` hoisting causes `undefined`, not `10`.

// 🔥 Keep practicing! Let me know if you need more clarifications. 🚀
