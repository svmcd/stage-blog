import { authorized } from "../stores";
import { useStore } from "@nanostores/react";
import { useRef, useState } from "react";
import { ToastMessage } from "../components/ToastMessage";

const CommentBox = ({ slug }: any) => {
  const $authorized = useStore(authorized);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!$authorized) {
      alert("Are you trying to bypass the paywall?");
      return;
    }
    if (e.currentTarget) {
      setIsSubmitting(true);
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
      setIsSubmitting(false);
      formRef.current?.reset();
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} ref={formRef} className="relative">
        {$authorized === "true" ? null : (
          <>
            <div className="absolute inset-0 glass rounded-lg"></div>
          </>
        )}
        <div className="box-static flex flex-col gap-2">
          <div className="rounded-lg flex flex-col gap-2">
            <label htmlFor="author" className="sr-only">
              Author
            </label>
            <input
              type="text"
              name="author"
              className="w-full bg-stone-100 p-2 border-0 rounded-lg focus:ring-0 outline-0"
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
              className="w-full bg-stone-100 p-2 border-0 rounded-lg focus:ring-0 outline-0"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="cta2 bg-stone-900"
              disabled={isSubmitting ? true : false}
            >
              {isSubmitting ? "Loading..." : "Add comment"}
            </button>
          </div>
        </div>
      </form>
      {showToast && (
        <ToastMessage
          title="Your comment has been submitted successfully"
          text="It can take some time before it shows up in the comments"
          borderColor="border-lime-500"
        />
      )}
    </>
  );
};

export default CommentBox;
