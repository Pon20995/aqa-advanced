async function getToDo(fetchUrl) {
  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch todo");
    }
    const toDoData = await response.json();
    return toDoData;
  } catch (error) {
    throw error;
  }
}
getToDo("https://jsonplaceholder.typicode.com/todos/1").then(console.log);

async function getUser(fetchUrl) {
  try {
    const response = await fetch(fetchUrl);
    if (response.status > 299) {
      throw new Error("Failed to fetch user");
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    throw error;
  }
}
getUser("https://jsonplaceholder.typicode.com/users/1").then(console.log);
