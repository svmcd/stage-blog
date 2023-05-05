import { useState, useEffect } from "react";
import { formatDistance } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "@nanostores/react";
import { authorized } from "../stores";

interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

const Comments = ({ slug, comments }: any) => {
  const $authorized = useStore(authorized);
  const formattedDate = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistance(date, new Date(), { addSuffix: true });
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {comments.map((comment: Comment) => (
          <div
            key={comment.id}
            className="relative box-static flex gap-2 flex-col"
          >
            <div className="flex gap-2">
              <p className="font-medium">{comment.author}</p>
              <p className="opacity-50">{formattedDate(comment.createdAt)}</p>
            </div>
            <div className="">
              {$authorized === "true" ? (
                <p>{comment.content}</p>
              ) : (
                <>
                  <div className="absolute inset-0 glass rounded-lg"></div>
                  <p>Are you trying to bypass the paywall?</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
