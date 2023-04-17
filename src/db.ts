import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllPosts() {
  try {
    // connect the client
    await prisma.$connect();
    // fetch all posts
    const allPosts = await prisma.post.findMany();
    // disconnect client
    await prisma.$disconnect();
    // return all posts
    return allPosts;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
