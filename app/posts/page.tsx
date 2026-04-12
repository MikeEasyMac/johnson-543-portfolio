import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const PostsPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Posts</h1>
      <p className="text-gray-700">
        Browse all posts. Click a title to view its details.
      </p>
      <ul className="list-disc list-inside space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/posts/${post.id}`}
              className="text-red-700 hover:underline capitalize"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
