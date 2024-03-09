function fetchTodo() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        if (!response.ok) {
          reject(new Error('Failed to fetch todo'));
        }
        return response.json();
      })
      .then((todo) => {
        resolve(todo);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function fetchUser() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        if (!response.ok) {
          reject(new Error('Failed to fetch user'));
        }
        return response.json();
      })
      .then((user) => {
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log('Todo: ', todo);
    console.log('User: ', user);
  })
  .catch((error) => {
    console.log('Error: ', error);
  });
