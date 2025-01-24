"use client";

import { useEffect, useState } from "react";

export default function BlogDetails({ params }) {
  const { blogId } = params; // Extract the blogId from the route parameters
  const [blog, setBlog] = useState(null); // State to hold the blog details
  const [loading, setLoading] = useState(true); // Loading state


  useEffect(() => {

    const fetchBlogDetails = async () => {

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${blogId}`
      )
      if (!response.ok) {
        throw new Error("Failed to fetch blog details")
      }
      const data = await response.json()
      setBlog(data)
      setLoading(false)
    }
    fetchBlogDetails()
  }, [blogId])


  if (loading) {
    return <div className="text-center text-lg font-bold mt-10">Loading...</div>;
  }

  return (
    <div className="p-6 w-11/12 lg:w-4/12 mx-auto my-12">
      <h1 className="text-3xl lg:text-4xl text-center font-bold underline ">Post Details</h1>
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">
            {blog.id}. {blog.title}
          </h2>
          <p className="text-gray-600">
            <strong>User ID:</strong> {blog.userId}
          </p>
          <p className="text-gray-700 mt-4">
            <strong>Body:</strong> {blog.body}
          </p>
        </div>
      </div>
    </div>
  );
}
