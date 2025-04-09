import { mergeTwoLists, ListNode, LinkedList } from "./solution-021.js";

const l1 = new LinkedList();
l1.append(1);
l1.append(2);
l1.append(4);
const l2 = new LinkedList();
l2.append(1);
l2.append(3);
l2.append(4);

const case1 = {
    list1: l1,
    list2: l2
};

const l3 = new LinkedList();
const l4 = new LinkedList();

const case2 = {
    list1: l3,
    list2: l4
};

const l5 = new LinkedList();
const l6 = new LinkedList();
l6.append(0);

const case3 = {
    list1: l5,
    list2: l6
};

const m1 = new LinkedList(mergeTwoLists(case1.list1.head, case1.list2.head));
console.log(`Case 1 Expected:\n[ 1, 1, 2, 3, 4, 4 ]\nCase 1 Actual:`);
m1.print();

const m2 = new LinkedList(mergeTwoLists(case2.list1.head, case2.list2.head));
console.log(`Case 2 Expected:\n[]\nCase 2 Actual:`);
m2.print();

const m3 = new LinkedList(mergeTwoLists(case3.list1.head, case3.list2.head));
console.log(`Case 3 Expected:\n[ 0 ]\nCase 3 Actual:`);
m3.print();