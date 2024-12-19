//export default function Events() {
//return (
//<h1>Events</h1>
// );
//}

import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Rocket Launch",
    date: "20/12/2024",
    time: "9:00",
    location: "Silverdale, Auckland, New Zealand",
  },
  {
    id: 2,
    title: "Rocket Launch",
    date: "21/12/2024",
    time: "10:00",
    location: "Silverdale, Auckland, New Zealand",
  },
];

export default function EventsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id} style={{ marginBottom: "10px" }}>
            <Link href={`/events/${event.id}`}>
              {event.title} - {event.date} at {event.time}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
