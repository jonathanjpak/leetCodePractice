# 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
 

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

## Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

## Solution

1. Clarify the Question
We get two sorted linked lists and we want to combine them into one sorted list. We return the head of the merged linked list. The total number of nodes can be between 0 and 50 so we have to also consider a case where we get a linked list with no values in it. The values of list1 and list2 are pre-sorted in increasing order.

2. State a Naive Approach First
At first thought we can iterate through each list separately, and push each node into one array which would be time complexity O(m) + O(n). Then running a separate sort afterwards and populating a new linked list would be in the realm of O(nlogn).

3. Think Out Loud
This isn't efficient because the benefit of linkedlist is the ease of insertion of a new node which is in O(1) or constant time. I think if we can create an algorithm that inserts into a linkedlist as we iterate would be the best.

4. Plan Before You Code
To take advantage of LinkedList insertions, we can create a dummy LinkedList and populate while we iterate through the presorted lists. We compare and then insert the value of the list with the smaller value into the dummy. We then reassign the next value to both the dummy and the list we took the value from. We can stop iterating when both list values are null.

5. Write Clean, Clear Code
6. Test with Examples
7. Analyze Time/Space Complexity
