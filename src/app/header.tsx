"use client";

import Link from "next/link";
import "./styles/header.css";
import { usePathname } from "next/navigation";
import logo from "./resources/logo.png";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className={"link " + (pathname === "/" ? "active" : "")}>
        <Link href="/">HOME</Link>
      </div>
      <div className={"link " + (pathname === "/events" ? "active" : "")}>
        <Link href="/events">EVENTS</Link>
      </div>
      <div className="logo">
        <Image className="logo-img" src={logo} alt="logo" />
      </div>
      <div className={"link " + (pathname === "/rockets" ? "active" : "")}>
        <Link href="/rockets">ROCKETS</Link>
      </div>
      <div className={"link " + (pathname === "/blog" ? "active" : "")}>
        <Link href="/blog">BLOG</Link>
      </div>
    </header>
  );
}
