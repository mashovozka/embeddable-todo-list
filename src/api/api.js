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
  async addTodos(todo) {
    const response = await instance.post("/", todo);
    return response.data;
  },
  async deleteTodos(id) {
    const response = await instance.delete(`/${id}`);
    return response.data;
  },
  async updateTodos(todo) {
    const response = await instance.put(`/${todo.id}`, todo);
    return response.data;
  },
};
