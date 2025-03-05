"use client";
import { useEffect, useState } from "react";
import EventCard from "../comopnents/EventCard";

type EventType = {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
};

export default function UpcomingEventsPage() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data: EventType[]) => {
        // Filter for upcoming events based on the event date
        const upcomingEvents = data.filter(
          (event) => new Date(event.date) >= new Date()
        );
        setEvents(upcomingEvents);
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mt-4">Upcoming Events</h1>
      {/* Display the total number of events directly on the page */}
      <p className="text-center mt-2">Total upcoming events: {events.length}</p>

      {/* Grid Layout for Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event._id} event={event} />)
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No upcoming events.
          </p>
        )}
      </div>
    </div>
  );
}
