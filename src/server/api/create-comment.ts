import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { content, postId } = req.body;

  try {
    const newComment = await prisma.comment.create({
      data: {
        content,
        postId,
      },
    });
    res.status(200).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
