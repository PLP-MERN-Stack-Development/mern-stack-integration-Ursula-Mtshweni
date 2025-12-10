import { useApp } from "../context/AppContext";
import PostList from "../components/PostList";
import Layout from "../components/Layout";

export default function Home() {
  const { posts, loading } = useApp();

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
      {loading ? <p>Loading...</p> : <PostList posts={posts} />}
    </Layout>
  );
}
