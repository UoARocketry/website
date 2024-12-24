import events from "./eventsData";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#1e1e1e", color: "#fff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Upcoming Events
      </h1>
      {/* Upcoming Events */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {events.upcoming.map((event) => (
          <div
            key={event.id}
            style={{
              display: "flex",
              border: "2px solid #FF4500",
              borderRadius: "8px",
              backgroundColor: "#D95435",
              overflow: "hidden",
            }}
          >
            {/* Image Placeholder */}
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

            {/* Event Details */}
            <div
              style={{
                flex: "2",
                padding: "20px",
                color: "#fff",
              }}
            >
              <h2 style={{ margin: "0 0 10px 0" }}>{event.title}</h2>
              <p style={{ margin: "5px 0" }}>{event.time}</p>
              <p style={{ margin: "5px 0" }}>{event.date}</p>
              <p style={{ margin: "5px 0" }}>{event.location}</p>
              <Link
                href={`/events/${event.id}`}
                style={{
                  color: "#FF4500",
                  textDecoration: "underline",
                  marginTop: "10px",
                  display: "inline-block",
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Past Events</h1>
      {/* Past Events */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {events.past.map((event) => (
          <div
            key={event.id}
            style={{
              display: "flex",
              border: "2px solid #FF4500",
              borderRadius: "8px",
              backgroundColor: "#D95435",
              overflow: "hidden",
            }}
          >
            {/* Image Placeholder */}
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

            {/* Event Details */}
            <div
              style={{
                flex: "2",
                padding: "20px",
                color: "#fff",
              }}
            >
              <h2 style={{ margin: "0 0 10px 0" }}>{event.title}</h2>
              <p style={{ margin: "5px 0" }}>{event.time}</p>
              <p style={{ margin: "5px 0" }}>{event.date}</p>
              <p style={{ margin: "5px 0" }}>{event.location}</p>
              <Link
                href={`/events/${event.id}`}
                style={{
                  color: "#FF4500",
                  textDecoration: "underline",
                  marginTop: "10px",
                  display: "inline-block",
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
