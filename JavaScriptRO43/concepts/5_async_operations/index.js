setTimeout(function () {
  console.log("callback!");
}, 1000); // 1000ms (1s)
console.log("normal flow!");

// A promise is an object that represents the termination of asynchronous processing in the future (success or failed)
const fetchSum = new Promise((resolve, reject) => {
  const sum = 1000;
  if (sum >= 1000) {
    resolve(sum);
  } else {
    reject("The sum is not at least 1000.");
  }
});

// call the promise methods (then, catch, finally)
fetchSum
  .then((data) => {
    // success
    console.log(data); // 1000
  })
  .catch((error) => {
    // failure
    console.log(error); // "The sum is not at least 1000."
  })
  .finally(() => {
    console.log("always executed at the end of the promise");
  });

// async / await syntax
async function fetchUsers() {
  // we can use "await" keyword inside our function before promise
  // async operations: promise, fetch

  // API Link where we can access to retrieve random users
  const endpointUrl = "https://randomuser.me/api/?results=3";

  // Using fetch API to do a HTTP request in order to retrieve the users
  try {
    const result = await fetch(endpointUrl);
    console.log(result);
    const body = await result.json();
    console.log(body);
    /*
    {
    results: [
        {
        gender: 'female',
        name: [Object],
        location: [Object],
        email: 'camila.robertson@example.com',
        login: [Object],
        dob: [Object],
        registered: [Object],
        phone: '07-0854-5962',
        cell: '0408-586-150',
        id: [Object],
        picture: [Object],
        nat: 'AU'
        },
        ...
    ],
    info: { seed: '326ef2abca5165b5', results: 3, page: 1, version: '1.4' }
    }
  */
  } catch (error) {
    console.log(error);
  }
}
fetchUsers();
