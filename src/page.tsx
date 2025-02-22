import React from "react";
import Link from "next/link";

const EventsPage = () => {
  return (
    <div>
      <h1>Events</h1>
      <p>
        <Link href="/events/upcoming">Upcoming Events</Link>
      </p>
      <p>
        <Link href="/events/past">Past Events</Link>
      </p>
    </div>
  );
};

export default EventsPage;
