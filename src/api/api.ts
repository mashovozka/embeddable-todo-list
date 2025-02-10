import axios from "axios";

interface Todo {
  id: string;
  value: string;
  done: boolean;
  createdAt: number;
}

// export const baseUrl = "http://localhost:3001";
export const baseUrl = "/db.json";

const instance = axios.create({
  baseURL: baseUrl,
});

export const todosApi = {
  async getTodos() {
    const response = await instance.get("/todos");
    return response.data;
  },

  async addTodo(todo: Todo) {
    const response = await instance.post("/todos", todo);
    return response.data;
  },

  async toggleTodo(todo: Todo) {
    const response = await instance.patch(`/todos/${todo.id}`, {
      done: !todo.done,
    });
    return response.data;
  },
};
