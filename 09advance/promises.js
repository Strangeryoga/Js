const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async operation 1... is completed");
      resolve();
    }, 1000);
  });
  
  p1.then(function () {
    console.log("Promise is consumed");
  });
  
  
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async task 2 is completed");
      resolve();
    }, 1000);
  }).then(function () {
    console.log("Promise 2 is consumed");
  });
  
  
  const p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async task 3 is completed");
      resolve({ username: "Stranger", email: "4gN3H@example.com" });
    }, 1000);
  });
  p3.then(function (user) {
    console.log(user);
  });
  
  
  const p4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let err = false;
  
      // if(!error) {
      //     resolve({username: "stranger", password: "123"});
      //   } else {
      //       reject("Error: User not found");
      //     }
  
      !err
        ? resolve({ username: "stranger", password: "123" })
        : reject("Error: User not found");
    }, 1000);
  });
  p4.then((user) => user.username)
    .then((username) => console.log(username))
    .catch((error) => console.log(error))
    .finally(() => console.log("Finally"));
  
  
  const p5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = false;
      if (!error) {
        resolve({ username: "javascript", password: "123" });
      } else {
        reject("Error: Js went wrong");
      }
    }, 1000);
  });
  
  /**
   * Consume Promise 5.
   *
   * @async
   * @function consumePromise5
   * @returns {Promise<void>}
   */
  async function consumePromise5() {
    try {
      const response = await p5; // Await the completion of Promise p5
      console.log(response); // Log the response
    } catch (error) {
      console.log(error); // Log any errors that occur
    }
  }
  consumePromise5();
  
  
  /**
   * Fetches all users from the API and logs the data.
   * @returns {Promise<void>} - A promise that resolves when the data is logged.
   */
  async function getAllUsers() {
    try {
      // Fetch the users from the API
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
      // Parse the response data
      const data = await response.json();
  
      // Log the data
      console.log(data);
    } catch (error) {
      // Log any errors that occur during the fetch or parsing
      console.log("E: ", error);
    }
  }
  getAllUsers();
  
  
  // By using fetch & then
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((e) => e.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("E: ", err));
  