import Post from "./Post";

function Feed() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          My Feed
        </h2>

        <p className="mt-1 text-gray-500">
          Latest post from your network
        </p>
      </div>

      <Post />

    </div>
  );
}

export default Feed;