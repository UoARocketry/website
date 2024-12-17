import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center justify-center h-16  border-t-2 border-blue-900">
      <ul className="flex flex-column items-center space-x-4">
        <li>
          <Link href="/">Instagram</Link>
        </li>
        <li>
          <Link href="/events">Facebook</Link>
        </li>
        <li>
          <Link href="/rockets">Discord</Link>
        </li>
      </ul>
    </div>
  );
}
