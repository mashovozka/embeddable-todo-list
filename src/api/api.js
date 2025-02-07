import axios from "axios";

export const baseUrl = "http://localhost:3001";

const instance = axios.create({
  baseURL: baseUrl,
});

export const todosApi = {
  async getTodos() {
    const response = await instance.get("/todos");
    return response.data;
  },

  async addTodo(todo) {
    const response = await instance.post("/todos", todo);
    return response.data;
  },

  async toggleTodo(todo) {
    const response = await instance.patch(`/todos/${todo.id}`, {
      done: !todo.done,
    });
    return response.data;
  },
};
