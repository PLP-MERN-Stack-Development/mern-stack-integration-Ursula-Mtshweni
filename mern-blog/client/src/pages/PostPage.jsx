import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../lib/api";
import Layout from "../components/Layout";
import PostView from "../components/PostView";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const api = useApi();

  useEffect(() => {
    api.getPost(id).then((res) => setPost(res.data));
  }, [id]);

  return (
    <Layout>
      <PostView post={post} />
    </Layout>
  );
}
