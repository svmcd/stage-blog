import { prisma } from "../../server/prisma-client";

export const getCommentsForPost = async (postId: string | null) => {
  const comments = await prisma.comment.findMany({
    where: { postId: postId ?? undefined },
  });
  const allCommentsInDbForPost = comments;
  return allCommentsInDbForPost;
};
