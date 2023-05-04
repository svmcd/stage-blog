import { useState, useEffect } from "react";
import { formatDistance } from "date-fns";
import { useQuery } from "@tanstack/react-query";

interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

const Comments = ({ slug, comments }: any) => {
  const formattedDate = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistance(date, new Date(), { addSuffix: true });
  };

  console.log("HEREE", comments);

  return (
    <>
      <div className="flex flex-col gap-2">
        {comments.map((comment: Comment) => (
          <div key={comment.id} className="box-static flex gap-2 flex-col">
            <div className="flex gap-2">
              <p className="font-medium">{comment.author}</p>
              <p className="opacity-50">{formattedDate(comment.createdAt)}</p>
            </div>
            <div className="">
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
