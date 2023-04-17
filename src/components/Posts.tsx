import { useGetAllPosts } from "../hooks/useGetAllPosts";

export const Posts = () => {
  const posts = useGetAllPosts();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
