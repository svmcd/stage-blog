import { PrismaClient } from "@prisma/client";
import type { APIRoute } from "astro";

const prisma = new PrismaClient();

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();
  const author = data.author;
  const comment = data.comment;
  const postId = data.slug;

  await prisma.comment.create({
    data: {
      author: author as string,
      postId: postId as string,
      content: comment as string,
      createdAt: new Date(),
    },
  });

  return new Response(null, {
    status: 200,
  });
};