import { Link } from "react-router-dom";

export default function PostList({ posts }) {
  if (!posts?.length) return <p>No posts available yet.</p>;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post._id} className="border p-4 rounded shadow-sm">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.content.slice(0, 120)}...</p>
          <Link
            to={`/post/${post._id}`}
            className="text-blue-500 hover:underline mt-2 block"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}
