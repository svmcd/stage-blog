import Comments from "./Comments";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const CommentsWrapper = ({ slug, comments }: any) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Comments slug={slug} comments={comments} />
      </QueryClientProvider>
    </>
  );
};

export default CommentsWrapper;
