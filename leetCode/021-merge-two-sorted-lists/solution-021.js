// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

class LinkedList {
    constructor(headNode) {
        if(!headNode) {
            this.head = null;
        } else {
            this.head = headNode;
        }
    }
  
    // Add a node to the end
    append(value) {
      const newNode = new ListNode(value);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }

    getArray() {
        let current = this.head;
        let array = [];
        while (current) {
            array.push(current.val);
            current = current.next;
        }
        return array;
    }
  
    // Print all values (for testing)
    print() {
      console.log(this.getArray());
    }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy list to populate
    const dummy = new ListNode();
    let current = dummy;

    // Use a while loop to iterate through list1 and list2
    // Stop list when both list values are null
    while (list1 && list2) {
        // Compare values
        if(list1.val < list2.val) {
            // Insert lower value into dummy list
            current.next = list1;
            // Reassign next for the list that's value was used and dummy list
            list1 = list1.next;
        } else {
            // Insert lower value into dummy list
            current.next = list2;
            // Reassign next for the list that's value was used and dummy list
            list2 = list2.next;
        }
        // Reassign next for the list that's value was used and dummy list
        current = current.next;
    }

    // Handle when only one of the lists is empty
    if (list1 && !list2) {
        current.next = list1;
    } else if (list2 && !list1) {
        current.next = list2;
    }

    // Return next because initialized dummy.val is 0
    return dummy.next;
};

export {mergeTwoLists, ListNode, LinkedList};














































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
// var mergeTwoLists = function(list1, list2) {
//     const dummy = new ListNode();
//     let current = dummy;
    
//     // While both lists have a node
//     while (list1 && list2) {
//         if (list1.val < list2.val) {
//             current.next = list1;
//             // Traverse to next node in list1
//             list1 = list1.next;
//         } else {
//             current.next = list2;
//             list2 = list2.next;
//         }
//         current = current.next;
//     }

//     if (list1 !== null) {
//         current.next = list1;
//     } else {
//         current.next = list2;
//     }

//     // Returns next because first node should be 0 from initialization of new ListNode
//     return dummy.next;
// };