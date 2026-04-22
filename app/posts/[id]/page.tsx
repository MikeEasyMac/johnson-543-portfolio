import Link from "next/link";

export const dynamic = "force-dynamic";

type PostPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const PostPage = async ({ params }: PostPageProps) => {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return (
    <div className="flex flex-col gap-6">
      <Link href="/posts" className="text-red-700 hover:underline text-sm">
        ← Back to Posts
      </Link>
      <h1 className="text-3xl font-bold capitalize">
        {post.title ? post.title : "No Title Available"}
      </h1>
      <p className="text-gray-700 leading-relaxed">
        {post.body ? post.body : "No content available."}
      </p>
      <p className="text-sm text-gray-500">
        Post ID: {post.id} &nbsp;|&nbsp; User ID: {post.userId}
      </p>
    </div>
  );
};

export default PostPage;
