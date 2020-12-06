/*
ASYNC & AWAIT
*/

function getPersonsInfo(name) {
  return server.getPeople().then((people) => {
    return people.find((person) => {
      return person.name === name;
    });
  });
}

async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find((person) => {
    return person.name === name;
  });
  return person;
}

/*
Learning Outcomes
  1. How do you declare an async function?
  2. What does the async keyword do?
  3. What does the await keyword do?
  4. What is returned from an async function?
  5. What happens when an error is thrown inside an async function?
  6. How can you handle errors inside an async function?
*/

/*
* The async keyword

When a funciton is declared with async, it automatically returns a promise
Returning in an async function is the same as resolving a promise, same with an error.

async functions can be used with any of the ways a function can be created.

Here are a couple examples of how you can use async.
*/

const asyncFunction = async () => {
  // async task and return promise
  return result;
};

anArray.forEach(async (item) => {
  // do something asynchronously for each item in 'anArray'
  // you can also use .map here to return an array of promises
});

server.getPeople().then(async (people) => {
  people.forEach((person) => {
    // async task for each person
  });
});

/*
* The await keyword

await is pretty simple: it tells JS to wait for an async action to finish before continuing the function.
await === .then()
Instead of calling .then() after the asynchronous function, you would assign a variable to the result using await.
*/

/*
* Error Handling

Promises have the .catch() method.
Since async functions just return a promise, you can simply call the function, and append a .catch() at the end.
*/

asyncFunctionCall().catch((err) => {
  console.error(err);
});

/*
There is another way: try/catch
If you want to handle the error directly inside the async function, use this.
*/

async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find((person) => {
      return person.name === name;
    });
    return person;
  } catch (error) {
    // Handle Error
  }
}

/*

*/
