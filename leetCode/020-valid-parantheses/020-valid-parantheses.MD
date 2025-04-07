# 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 

## Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

## Solution

This problem focuses on string validation on a set of 6 types of paranthesis characters. Brackets must open and close in the same type of brackets and must be closed in the correct order with its corresponding bracket type. We don't have to worry too much about edge cases since we have a small closed set of 6 characters. We can don't have to write defensive code to handle bad inputs.

One solution that comes to mind is to create a separate string that has its matching pair. As we go through the string s, we can create a string t with its corresponding matches. We would build it backwards in t. When there's an open bracket, we input its matching close bracket in string t. If we come across a close bracket in string s, we check t.

If string s = "({})"
s after "("
t = ")"
s after "({"
t = ")}
s after "({}"
we check for the last character in t, if it's a match remove it, else return false
t = ")"

Another solution that comes to mind would be to have a hash map with the pairs. As we iterate through string s, we push open-faced characters into an array. If we come across a close-face we pop the array and check if the close character pairs in the hash map. If it doesn't pair we return false. We return true if the array is back to zero.
