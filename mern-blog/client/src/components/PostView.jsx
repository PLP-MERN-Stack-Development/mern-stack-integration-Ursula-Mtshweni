export default function PostView({ post }) {
  if (!post) return <p>Loading...</p>;

  return (
    <article className="p-4 border rounded">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">Category: {post.category?.name}</p>
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover mb-4 rounded"
        />
      )}
      <p>{post.content}</p>
    </article>
  );
}
