const CommentBox = () => {
  return (
    <>
      <form>
        <div className="box-static">
          <div className="px-4 py-2 bg-white rounded-t-lg ">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows={4}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0 outline-0"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t ">
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
