import { twoSum } from "./index.js";

const case1 = [2, 7, 11, 15];
const target1 = 9;
// Expect [0, 1]

const case2 = [3, 2, 4];
const target2 = 6
// Expect [1, 2]

const case3 = [3, 3];
const target3 = 6;
// Expect [0, 1]

const case4 = [-100, -33, 42, 33, 17, 99];
const target4 = 66;
// Expect [1, 5]

console.log(twoSum(case1, target1));
console.log(twoSum(case2, target2));
console.log(twoSum(case3, target3));
console.log(twoSum(case4, target4));