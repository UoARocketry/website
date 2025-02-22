export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/upcoming">Upcoming</a>
            </li>
            <li>
              <a href="/past">Past</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer content here</footer>
    </>
  );
}
