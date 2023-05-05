import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCommentsForPost = async (postId: string | null) => {
  const comments = await prisma.comment.findMany({
    where: { postId: postId ?? undefined },
  });
  const allCommentsInDbForPost = comments;
  return allCommentsInDbForPost;
};
