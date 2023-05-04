import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCommentsForBlog = async (blogId: string | null) => {
  const comments = await prisma.comment.findMany({
    where: { postId: blogId ?? undefined },
  });
  const allCommentsInDbForPost = comments;
  return allCommentsInDbForPost;
};
