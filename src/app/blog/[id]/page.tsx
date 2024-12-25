import blogData from "../blogData";

export default function BlogDetails({ params }: { params: { id: string } }) {
  const blog = blogData.blogs.find((b) => b.id.toString() === params.id);

  if (!blog) {
    return (
      <div
        style={{ padding: "20px", backgroundColor: "#1e1e1e", color: "#fff" }}
      >
        <h1>Blog not found</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#1e1e1e",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#FF4500", marginBottom: "20px" }}>{blog.title}</h1>
      <p style={{ marginBottom: "20px" }}>{blog.date}</p>
      <p style={{ marginBottom: "40px" }}>By: {blog.author}</p>
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#333",
          borderRadius: "8px",
          color: "#fff",
        }}
      >
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
