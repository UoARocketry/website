"use client";
import Image from "next/image";

type BlogPost = {
  _id: string;       // from Mongo
  title: string;
  date: string;
  author: string;
  image?: string;    // optional field for a real image
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md bg-gray-800">
      {/* Top: Gray placeholder or actual image if post.image exists */}
      <div className="bg-gray-400 h-40 w-full flex items-center justify-center">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-gray-700">No image</span>
        )}
      </div>

      {/* Bottom: Orange section for date, title, and author */}
      <div className="bg-orange-600 p-4">
        <p className="text-white text-sm">{post.date}</p>
        <h2 className="text-white text-lg font-bold mt-1">{post.title}</h2>
        <p className="text-white text-sm mt-1">By: {post.author}</p>
      </div>
    </div>
  );
}
