import Layout from "../components/Layout";
import PostForm from "../components/PostForm";
import { useApp } from "../context/AppContext";
import useApi from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const { categories, setPosts, posts } = useApp();
  const api = useApi();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const res = await api.createPost(data);
    setPosts([...posts, res.data]);
    navigate("/");
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <PostForm onSubmit={handleSubmit} categories={categories} />
    </Layout>
  );
}
