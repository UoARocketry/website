"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center h-16  border-b-2 border-blue-900">
      <ul className="flex flex-row items-center space-x-40">
        <li className={pathname == "/" ? "active" : ""}>
          <Link href="/">home</Link>
        </li>
        <li className={pathname == "/events" ? "active" : ""}>
          <Link href="/events">events</Link>
        </li>
        <li className={pathname == "/rockets" ? "active" : ""}>
          <Link href="/rockets">rockets</Link>
        </li>
        <li className={pathname == "/blog" ? "active" : ""}>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
    </div>
  );
}
