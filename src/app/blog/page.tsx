"use client";
import React from "react";
import Link from "next/link"; // If you need it, otherwise remove

// Hardcoded sample data (no external file needed)
const posts = [
  {
    id: "1",
    date: "10/12/2024",
    title: "Blog Title",
    author: "Ayesha Babar",
  },
  {
    id: "2",
    date: "10/12/2024",
    title: "Blog Title",
    author: "Ayesha Babar",
  },
  {
    id: "3",
    date: "10/12/2024",
    title: "Blog Title",
    author: "Ayesha Babar",
  },
  {
    id: "4",
    date: "10/12/2024",
    title: "Blog Title",
    author: "Ayesha Babar",
  },
  {
    id: "5",
    date: "10/12/2024",
    title: "Blog Title",
    author: "Ayesha Babar",
  },
  {
    id: "6",
    date: "10/12/2024",
    title: "Blog Title",
    author: "Ayesha Babar",
  },
  {
    id: "7",
    date: "10/12/2024",
    title: "Blog Title",
    author: "Ayesha Babar",
  },
  {
    id: "8",
    date: "10/12/2024",
    title: "Blog Title",
    author: "Ayesha Babar",
  },
  {
    id: "9",
    date: "10/12/2024",
    title: "Blog Title",
    author: "Ayesha Babar",
  },
];

export default function BlogPage() {
  return (
    <div style={{ padding: "20px", backgroundColor: "black", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "white", margin: "20px 0" }}>
        Recent Blog Posts
      </h1>

      {/* Grid container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto", // Center the grid
        }}
      >
        {posts.map((post) => (
          <div key={post.id} style={{ backgroundColor: "#333", borderRadius: "8px" }}>
            {/* Gray area (placeholder for an image) */}
            <div style={{ height: "200px", backgroundColor: "#999" }} />

            {/* Orange area for date, title, author */}
            <div style={{ backgroundColor: "#C34F27", padding: "10px", color: "white" }}>
              <p>{post.date}</p>
              <h2 style={{ margin: "5px 0" }}>{post.title}</h2>
              <p>By: {post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
