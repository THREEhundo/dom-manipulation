# Find the Oldest

given an array of objects representing people with a birth and death year, return the oldest person.

## Hints
- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- this can be done with a couple of chained array methods, or by using `reduce`.
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.

## Thoughts
The biggest hurdle for this challenge was figuring out how I would compare the age of each person within the array. I decided to use a combination of map and reduce. Reduce contained a maxCallback function that utilized Math.max() to compare numbers and return the greatest value.
