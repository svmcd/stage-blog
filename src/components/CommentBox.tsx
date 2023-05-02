import { authorized } from "../stores";
import { useStore } from "@nanostores/react";
import { useRef } from "react";
import createComment from "../server/api/create-comment";

const CommentBox = ({ slug }) => {
  const $authorized = useStore(authorized);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <div className="box-static max-w-3xl flex flex-col gap-2">
        <div className="   rounded-lg ">
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
  );
};

export default CommentBox;
