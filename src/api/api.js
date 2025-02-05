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
};
