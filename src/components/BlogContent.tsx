import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { authorized } from "../stores";

const BlogContent = ({
  title,
  date,
  body,
}: {
  title: string;
  date: string;
  body: string;
}) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const $authorized = useStore(authorized);

  useEffect(() => {
    setIsAuthorized($authorized);
  }, [$authorized]);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">
          {isAuthorized ? title : "Lorem Ipsum"}
        </h1>
        <p className="font-medium">
          {" "}
          {isAuthorized ? date : "1 januari t/m 31 december"}
        </p>
      </div>
      <div className="text-lg max-w-3xl">{body}</div>
    </>
  );
};

export default BlogContent;
