"use client";

import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard"; // Ensure the import path is correct

interface Event {
  _id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  type: string;
}

const fetchEvents = async (): Promise<Event[]> => {
  try {
    const res = await fetch("/api/events");
    const data = await res.json();
    return data.filter((event: Event) => event.type === "past");
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

const PastEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-center text-5xl font-semibold mb-10 font-montserrat">
        Past Events
      </h1>
      <div className="grid grid-cols-2 gap-6 justify-center">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event._id} {...event} />)
        ) : (
          <p className="text-center text-lg">No past events found.</p>
        )}
      </div>
    </div>
  );
};

export default PastEvents;
