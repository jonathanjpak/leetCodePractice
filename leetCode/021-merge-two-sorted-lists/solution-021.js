/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy list to populate

    // Use a while loop to iterate through list1 and list2
    // Stop list when both list values are null

    // Compare values

    // Insert lower value into dummy list

    // Reassign next for the list that's value was used and dummy list

    // Return dummy list head
};
















































/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let current = dummy;
    
    // While both lists have a node
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            // Traverse to next node in list1
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Returns next because first node should be 0 from initialization of new ListNode
    return dummy.next;
};