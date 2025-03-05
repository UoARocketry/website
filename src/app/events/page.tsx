"use client";

import React, { useEffect, useState } from "react";
import EventCard from "./components/EventCard"; // Ensure this is the correct import

interface Event {
  _id: string;
  title: string; //Changed from `name` to `title`
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
}

const fetchEvents = async (): Promise<Event[]> => {
  try {
    const res = await fetch("/api/events");
    const data = await res.json();
    console.log("✅ Events fetched:", data);
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

const EventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents().then((events) => {
      console.log("Filtering events...");
      setUpcomingEvents(events.filter((event) => event.type === "upcoming"));
      setPastEvents(events.filter((event) => event.type === "past"));
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      {/* Upcoming Events Section */}
      <h1 className="text-center text-5xl font-semibold font-montserrat mb-10">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-2 gap-10 justify-center">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <EventCard name={""} imageUrl={""} key={event._id} {...event} />
          ))
        ) : (
          <p className="text-center text-lg">No upcoming events found.</p>
        )}
      </div>

      {/* Past Events Section */}
      <h1 className="text-center text-5xl font-semibold font-montserrat mt-16 mb-10">
        Past Events
      </h1>
      <div className="grid grid-cols-2 gap-10 justify-center">
        {pastEvents.length > 0 ? (
          pastEvents.map((event) => (
            <EventCard name={""} imageUrl={""} key={event._id} {...event} />
          ))
        ) : (
          <p className="text-center text-lg">No past events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
