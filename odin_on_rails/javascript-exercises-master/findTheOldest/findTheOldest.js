let findTheOldest = function(people) {
  let oldest;

  for (let person of people) {
    const age = person.yearOfDeath - person.yearOfBirth;
    person.age = age;
  }

  const maxCallback = (max, curr) => Math.max(max, curr);

  let oldestAge = people.map(person => person.age)
    .reduce(maxCallback, -Infinity);
  for (let person of people) {
    if (oldestAge === person.age) {
      return person;
    }
  }
}

module.exports = findTheOldest