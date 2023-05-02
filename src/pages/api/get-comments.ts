import { PrismaClient } from "@prisma/client";
import type { APIRoute } from "astro";

const prisma = new PrismaClient();

export const getCommentsForPost = async (postId: string | null) => {
  const comments = await prisma.comment.findMany({
    where: { postId: postId ?? undefined },
    orderBy: { createdAt: "asc" },
  });
  const allCommentsInDbForPost = comments;
  return allCommentsInDbForPost;
};

export const get: APIRoute = async ({ request }) => {
  const params = new URLSearchParams(request.url);
  const allCommentsInDbForPost = await getCommentsForPost(params.get("postId"));
  return new Response(JSON.stringify(allCommentsInDbForPost), {
    status: 200,
  });
};
