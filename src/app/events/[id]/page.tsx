import events from "../eventsData";
import Link from "next/link";

export default function EventDetails({ params }: { params: { id: string } }) {
  const event =
    events.upcoming.find((e) => e.id.toString() === params.id) ||
    events.past.find((e) => e.id.toString() === params.id);

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
    <div
      style={{
        padding: "20px",
        color: "#fff",
        backgroundColor: "#1e1e1e",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#FF4500", marginBottom: "20px" }}>{event.title}</h1>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p style={{ marginTop: "40px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        elementum et felis sed fringilla. Morbi nec tincidunt dolor.
      </p>
      <Link
        href="/events"
        style={{
          color: "#FF4500",
          textDecoration: "underline",
          marginTop: "20px",
          display: "inline-block",
        }}
      >
        Back to Events
      </Link>
    </div>
  );
}
