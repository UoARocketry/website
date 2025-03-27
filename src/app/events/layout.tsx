import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/upcoming">Upcoming</Link>
            </li>
            <li>
              <Link href="/past">Past</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer content here</footer>
    </>
  );
}
