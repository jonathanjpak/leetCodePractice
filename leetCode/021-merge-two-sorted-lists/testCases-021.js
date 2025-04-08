import { mergeTwoLists } from "./solution-021";

const case1 = {
    list1: [1, 2, 4],
    list2: [1, 3, 4]
};

const case2 = {
    list1: [],
    list2: []
};

const case3 = {
    list1: [],
    list2: [0]
};

console.log(`Expected: [1, 1, 2, 3, 4, 4]\n Actual:${mergeTwoLists(case1.list1, case1.list2)}`);
console.log(`Expected: []\nActual:${mergeTwoLists(case2.list1, case1.list2)}`);
console.log(`Expected: [0]\nActual:${mergeTwoLists(case3.list1, case1.list2)}`);