# Reverse Integer

https://leetcode.com/problems/reverse-integer/

## Concerns

- The problem states that we have to assume the environment can't store 64-bit signed or unsigned integers. I think we can exclude this rule for Javascript.

## Key Concepts

- It's simply easier to deal with this as a string.
- Remember to convert the string to an array and vice versa

```js
split("");
join("");
```

- Remember to use use [reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) for arrays.
- Remember that we can use double stars to do exponents in Javascript.

```js
2 ** 31;
```
