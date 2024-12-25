import events from "./eventsData";
import Link from "next/link";
import "@fontsource/inter"; // Import Inter font

export default function EventsPage() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#1e1e1e",
        color: "#fff",
        fontFamily: "Inter, sans-serif", // Apply Inter font
      }}
    >
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
          <Link
            key={event.id}
            href={`/events/${event.id}`}
            style={{ textDecoration: "none" }} // Remove underline
          >
            <div
              style={{
                display: "flex",
                border: "4px solid #BF512E", // Orange border
                borderRadius: "0", // No rounded corners
                backgroundColor: "#BF512E",
                overflow: "hidden",
                width: "604px",
                height: "268px",
                cursor: "pointer", // Indicate clickable area
              }}
            >
              {/* Image Placeholder */}
              <div
                style={{
                  flex: "none",
                  width: "300px",
                  height: "100%",
                  backgroundColor: "#ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
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
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h2 style={{ margin: "0 0 10px 0", fontSize: "36px" }}>
                  {event.title}
                </h2>
                <p style={{ margin: "5px 0", fontSize: "18px" }}>
                  {event.time}
                </p>
                <p style={{ margin: "5px 0", fontSize: "30px" }}>
                  {event.date}
                </p>
                <p style={{ margin: "5px 0", fontSize: "12px" }}>
                  {event.location}
                </p>
              </div>
            </div>
          </Link>
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
          <Link
            key={event.id}
            href={`/events/${event.id}`}
            style={{ textDecoration: "none" }} // Remove underline
          >
            <div
              style={{
                display: "flex",
                border: "4px solid #BF512E", // Orange border
                borderRadius: "0", // No rounded corners
                backgroundColor: "#BF512E",
                overflow: "hidden",
                width: "604px",
                height: "268px",
                cursor: "pointer", // Indicate clickable area
              }}
            >
              {/* Image Placeholder */}
              <div
                style={{
                  flex: "none",
                  width: "300px",
                  height: "100%",
                  backgroundColor: "#ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
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
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h2 style={{ margin: "0 0 10px 0", fontSize: "36px" }}>
                  {event.title}
                </h2>
                <p style={{ margin: "5px 0", fontSize: "18px" }}>
                  {event.time}
                </p>
                <p style={{ margin: "5px 0", fontSize: "18px" }}>
                  {event.date}
                </p>
                <p style={{ margin: "5px 0", fontSize: "18px" }}>
                  {event.location}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
