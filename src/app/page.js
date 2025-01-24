import Link from "next/link";



export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  // console.log(posts);

  return (
    <div className="p-6 w-11/12 lg:w-10/12 mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">All Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={post.id} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">
                {index + 1}. {post.title}
              </h2>
              <p className="text-sm text-gray-500">
                Post ID: {post.id}
              </p>
              <div className="card-actions justify-end">
                <Link
                  href={`/blog/${post.id}`}
                  className="btn btn-primary btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
