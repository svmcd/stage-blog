import { useState, useEffect } from "react";
import { getAllPosts } from "../db";

type Post = {
  id: string;
  title: string;
  subtitle: string;
  body: string;
};

export const useGetAllPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };
    fetchData();
  }, [posts]);

  console.log(getAllPosts());
  return posts;
};
