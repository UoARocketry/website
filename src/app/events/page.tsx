import events from "./eventsData";

export default function EventsPage() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#1e1e1e", color: "#fff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Upcoming Events
      </h1>
      {/* Two-column grid for events */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {events.upcoming.map((event) => (
          <div
            key={event.id}
            style={{
              border: "2px solid #FF4500",
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#333",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h2 style={{ color: "#FF4500", marginBottom: "10px" }}>
              {event.title}
            </h2>
            <p>{event.time}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <a
              href={`/events/${event.id}`}
              style={{ color: "#FF4500", textDecoration: "underline" }}
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
