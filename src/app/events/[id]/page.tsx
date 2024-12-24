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
        padding: "40px",
        backgroundColor: "#1e1e1e",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          backgroundColor: "#333",
          borderRadius: "10px",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {/* Left: Image Placeholder */}
        <div
          style={{
            flex: "1",
            backgroundColor: "#ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#777" }}>Image Placeholder</span>
        </div>

        {/* Right: Event Details */}
        <div
          style={{
            flex: "2",
            padding: "40px",
          }}
        >
          <h1 style={{ color: "#FF4500", marginBottom: "20px" }}>
            {event.title}
          </h1>
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
            <strong>Time:</strong> {event.time}
          </p>
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
            <strong>Date:</strong> {event.date}
          </p>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            <strong>Location:</strong> {event.location}
          </p>
          <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            elementum et felis sed fringilla. Morbi nec tincidunt dolor. Auctor
            pharetra at nascetur cras id imperdiet vehicula. Vivamus elementum
            et felis sed fringilla.
          </p>

          <Link
            href="/events"
            style={{
              color: "#FF4500",
              textDecoration: "underline",
              display: "inline-block",
              marginTop: "20px",
            }}
          >
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}
