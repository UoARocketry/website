import events from "../eventsData"; // Import shared event data
import Link from "next/link"; // Import Link component

export default function EventDetails({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === params.id); // Find event by ID

  if (!event) {
    return (
      <div
        style={{ padding: "20px", color: "#fff", backgroundColor: "#1e1e1e" }}
      >
        <h1>Event not found</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", color: "#fff", backgroundColor: "#1e1e1e" }}>
      <h1 style={{ color: "#FF4500", marginBottom: "20px" }}>{event.title}</h1>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <Link
        href="/events"
        style={{ color: "#FF4500", textDecoration: "underline" }}
      >
        Back to Events
      </Link>
    </div>
  );
}
