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
      {/*If the home link is not highlighting properly it is because the url isn't equal to "/" and as coded it needs to be*/}
      <div className={"link " + (pathname === "/" ? "active" : "")}>
        <Link href="/">HOME</Link>
      </div>
      <div className={"link " + (pathname.includes("/events") ? "active" : "")}>
        <Link href="/events">
          <span>EVENTS</span>
        </Link>
      </div>
      <div className="logo">
        <Image className="logo-img" src={logo} alt="logo" />
      </div>
      <div
        className={"link " + (pathname.includes("/rockets") ? "active" : "")}
      >
        <Link href="/rockets">ROCKETS</Link>
      </div>
      <div className={"link " + (pathname.includes("/blog") ? "active" : "")}>
        <Link href="/blog">BLOG</Link>
      </div>
    </header>
  );
}
