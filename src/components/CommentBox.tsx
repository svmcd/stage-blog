import { authorized } from "../stores";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";

const CommentBox = () => {
  const $authorized = useStore(authorized);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission logic here
  };

  useEffect(() => {
    console.log("here", $authorized);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="box-static max-w-3xl flex flex-col gap-2">
        <div className="   rounded-lg ">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows={4}
            className="w-full bg-stone-200 p-2 border-0 rounded-lg focus:ring-0 outline-0"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="cta2 bg-stone-900 cursor-not-allowed"
          >
            Post comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentBox;
