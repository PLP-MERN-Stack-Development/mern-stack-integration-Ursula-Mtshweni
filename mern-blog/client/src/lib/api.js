import axios from "axios";

const useApi = () => {
  const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  return {
    getPosts: () => client.get("/posts"),
    getPost: (id) => client.get(`/posts/${id}`),
    createPost: (data) => client.post("/posts", data),
  };
};

export default useApi;
