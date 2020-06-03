# Exercise XX - palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```

### Thoughts

I had an issue with wordArray and reversedArray both giving the same reversed output of the array. I realized that they were both pointing to the same array in memory. It was a simple fix that required me to change wordArray in the if statement.

Changing the answer to the given solution showed that I could refactor even more. Got rid of the if else and just used a type conversion comparison to do so.
