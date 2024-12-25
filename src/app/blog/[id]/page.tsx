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
      }}
    >
      {/* Blog Header */}
      <h1
        style={{ color: "#FF4500", textAlign: "center", marginBottom: "20px" }}
      >
        {blog.title}
      </h1>
      <p style={{ textAlign: "center", marginBottom: "10px" }}>{blog.date}</p>
      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        By: {blog.author}
      </p>

      {/* Main Content Area */}
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {/* Left-Side Image Placeholders */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#cccccc",
              borderRadius: "8px",
              border: "2px solid #FF4500",
            }}
          ></div>
          <div
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#cccccc",
              borderRadius: "8px",
              border: "2px solid #FF4500",
            }}
          ></div>
          <div
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#cccccc",
              borderRadius: "8px",
              border: "2px solid #FF4500",
            }}
          ></div>
        </div>

        {/* Blog Content */}
        <div style={{ textAlign: "left", flex: 1 }}>
          <p style={{ marginBottom: "20px" }}>{blog.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            elementum et felis sed fringilla. Morbi nec tincidunt dolor. Lorem
            ipsum dolor sit amet.orem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus elementum et felis sed fringilla. Morbi nec
            tincidunt dolor. Lorem ipsum dolor sit amet.orem ipsum dolor sit
            amet, consectetur adipiscing elit. Vivamus elementum et felis sed
            fringilla. Morbi nec tincidunt dolor. Lorem ipsum dolor sit
            amet.orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            elementum et felis sed fringilla. Morbi nec tincidunt dolor. Lorem
            ipsum dolor sit amet.orem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus elementum et felis sed fringilla. Morbi nec
            tincidunt dolor. Lorem ipsum dolor sit amet.orem ipsum dolor sit
            amet, consectetur adipiscing elit. Vivamus elementum et felis sed
            fringilla. Morbi nec tincidunt dolor. Lorem ipsum dolor sit
            amet.orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            elementum et felis sed fringilla. Morbi nec tincidunt dolor. Lorem
            ipsum dolor sit amet.orem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus elementum et felis sed fringilla. Morbi nec
            tincidunt dolor. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
}
