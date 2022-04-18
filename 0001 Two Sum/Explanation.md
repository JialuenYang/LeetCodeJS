# Two Sum

https://leetcode.com/problems/two-sum/

## Key Concepts

- You already know the value of the second number because
  > target - number1 = number2
- You can search for number2 from current index to end of array. There's no need to search the whole array because you have already tried the numbers less than or equal to the current index.

## Time Complexity

The worst case scenario is when the last 2 numbers of the array are the correct answer.

- We will go through the entire array: **n**
- For each element of the array, we will also do a search: **log(n)**
  - Although we will be reducing the number of elements we search for as the current index increases, it doesn't really change the time complexity that much.

**Time Complexity = O(n\*log(n))**
