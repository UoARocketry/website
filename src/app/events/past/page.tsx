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

export default function PastEventsPage() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data: EventType[]) => {
        // Filter out events that happened in the past
        const pastEvents = data.filter(
          (event) => new Date(event.date) < new Date()
        );
        setEvents(pastEvents);
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mt-8">Past Events</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 justify-center">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event._id} event={event} />)
        ) : (
          <p className="text-center text-gray-300 col-span-full">
            No past events.
          </p>
        )}
      </div>
    </div>
  );
}
