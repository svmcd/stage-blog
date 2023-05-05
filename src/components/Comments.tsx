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
      <div className="flex flex-col gap-4 max-h-[50vh] relative overflow-scroll shadow-inner box-static">
        {$authorized === "true" ? null : (
          <>
            <div className="absolute inset-0 glass rounded-lg z-10"></div>
          </>
        )}
        {comments.length === 0 ? (
          <p className="text-center z-20">
            There are currently no comments on this post
          </p>
        ) : (
          comments.map((comment: Comment) => (
            <div key={comment.id} className="gap-4 flex flex-col">
              <div>
                <div className="flex gap-2">
                  <p className="font-medium">{comment.author}</p>
                  <p className="opacity-50">
                    {formattedDate(comment.createdAt)}
                  </p>
                </div>
                {$authorized === "true" ? (
                  <p>{comment.content}</p>
                ) : (
                  <>
                    <p>Are you trying to bypass the paywall?</p>
                  </>
                )}
              </div>
              <hr className="border-stone-300" />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Comments;
