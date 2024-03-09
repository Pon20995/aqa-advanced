class Todo {
  async fetchTodo() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      if (!response.ok) {
        throw new Error('Failed to fetch todo');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch todo');
    }
  }
}

class User {
  async fetchUser() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1',
      );
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch user');
    }
  }
}

async function fetchData() {
  const toDo = new Todo();
  const user = new User();
}
