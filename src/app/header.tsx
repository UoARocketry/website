"use client";

import Link from "next/link";
import "./styles/header.css";
import { usePathname } from "next/navigation";
import Head from "next/head";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="link">
        <Link href="/">Home</Link>
      </div>
      <div className="link">
        <Link href="/events">events</Link>
      </div>
      <div className="link">
        <Link href="/rockets">rockets</Link>
      </div>
      <div className="link">
        {" "}
        <Link href="/blog">blog</Link>
      </div>
    </header>
  );
}
