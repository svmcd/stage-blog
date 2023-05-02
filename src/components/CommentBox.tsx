import { authorized } from "../stores";
import { useStore } from "@nanostores/react";
import { useRef, useState, useEffect } from "react";

interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

const CommentBox = ({ slug }: any) => {
  const $authorized = useStore(authorized);
  const formRef = useRef<HTMLFormElement>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`/api/get-comments?postId=${slug}`);
      const data = await response.json();
      setComments(data);
    };
    fetchComments();
  }, [slug]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (e.currentTarget) {
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const author = formData.get("author") ?? "";
      const comment = formData.get("content") ?? "";
      const data = { author, comment, slug };
      await fetch("/api/create-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      formRef.current?.reset();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} ref={formRef}>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.author} said:</p>
            <p>{comment.content}</p>
            <hr />
          </div>
        ))}
        <div className="box-static max-w-3xl flex flex-col gap-2">
          <div className="rounded-lg flex flex-col gap-2">
            <label htmlFor="author" className="sr-only">
              Author
            </label>
            <input
              type="text"
              name="author"
              className="w-full bg-stone-200 p-2 border-0 rounded-lg focus:ring-0 outline-0"
              placeholder="Author"
              required
            />
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              name="content"
              rows={4}
              className="w-full bg-stone-200 p-2 border-0 rounded-lg focus:ring-0 outline-0"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="cta2 bg-stone-900">
              Post comment
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CommentBox;
