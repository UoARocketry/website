"use client";

import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard"; // Ensure this path is correct

interface Event {
  _id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  type: string;
}

const UpcomingEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        const filteredEvents = data.filter(
          (event: Event) => event.type === "upcoming"
        );
        setEvents(filteredEvents);
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-center text-5xl font-semibold mb-10 font-montserrat">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-2 gap-6 justify-center">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event._id} {...event} />)
        ) : (
          <p className="text-center text-lg">No upcoming events found.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
