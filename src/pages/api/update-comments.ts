import type { APIRoute } from "astro";
import { getCommentsForPost } from "./get-comments";

export const get: APIRoute = async ({ request }) => {
  const params = new URLSearchParams(request.url);
  const allCommentsInDbForPost = await getCommentsForPost(params.get("postId"));
  return new Response(JSON.stringify(allCommentsInDbForPost), {
    status: 200,
  });
};
