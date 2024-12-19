export default function EventDetails({ params }: { params: { id: string } }) {
  const events: Record<
    string,
    { title: string; date: string; time: string; location: string }
  > = {
    "1": {
      title: "Rocket Launch",
      date: "20/12/2024",
      time: "9:00",
      location: "Silverdale, Auckland, New Zealand",
    },
    "2": {
      title: "Rocket Launch",
      date: "21/12/2024",
      time: "10:00",
      location: "Silverdale, Auckland, New Zealand",
    },
  };

  const event = events[params.id];

  if (!event) {
    return <h1>Event not found</h1>;
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
    </div>
  );
}
