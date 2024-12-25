import Link from "next/link";
import blogData from "./blogData";

export default function BlogPage() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#1e1e1e", color: "#fff" }}>
      <h1
        style={{ textAlign: "center", marginBottom: "40px", color: "#FF4500" }}
      >
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
              width: "100%",
              maxWidth: "300px",
              backgroundColor: "#1e1e1e",
              borderRadius: "8px",
              overflow: "hidden",
              border: "2px solid #FF4500",
            }}
          >
            {/* Image Placeholder */}
            <div
              style={{
                width: "100%",
                height: "150px",
                backgroundColor: "#cccccc",
              }}
            ></div>
            {/* Blog Title Section */}
            <div
              style={{
                backgroundColor: "#FF4500",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#fff", margin: "5px 0", fontSize: "14px" }}>
                {blog.date}
              </p>
              <h2
                style={{
                  color: "#fff",
                  margin: "5px 0",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {blog.title}
              </h2>
              <p style={{ color: "#fff", margin: "5px 0", fontSize: "14px" }}>
                By: {blog.author}
              </p>
              <Link
                href={`/blog/${blog.id}`}
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                  display: "block",
                  marginTop: "10px",
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
