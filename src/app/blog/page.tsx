import Link from "next/link";
import blogData from "./blogData";

export default function BlogPage() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#1e1e1e", color: "#fff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Recent Blog Posts
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {blogData.blogs.map((blog) => (
          <div
            key={blog.id}
            style={{
              border: "2px solid #FF4500",
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#333",
            }}
          >
            <h2 style={{ color: "#FF4500", marginBottom: "10px" }}>
              {blog.title}
            </h2>
            <p>{blog.date}</p>
            <p>By: {blog.author}</p>
            <Link
              href={`/blog/${blog.id}`}
              style={{ color: "#FF4500", textDecoration: "underline" }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
