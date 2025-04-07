import { isValid } from "./index.js";

const case1 = "()";

const case2 = "()[]{}";

const case3 = "(]";

const case4 = "([])";

console.log(`Case 1 expected true. ${isValid(case1)}`);
console.log(`Case 2 expected true. ${isValid(case2)}`);
console.log(`Case 3 expected false. ${isValid(case3)}`);
console.log(`Case 4 expected true. ${isValid(case4)}`);