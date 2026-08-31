import LikeButton from "./LikeButton";

function Post() {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          Learning React Context API 🚀
        </h3>

        <p className="mt-2 text-gray-600">
          Context API helps us share data between components
          without passing props through every level.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <LikeButton />
      </div>

    </div>
  );
}

export default Post;