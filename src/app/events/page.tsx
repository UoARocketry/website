"use client";

import React, { useEffect, useState } from "react";
import EventCard from "./components/EventCard"; // Ensure correct path

interface Event {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
}

const fetchEvents = async (): Promise<Event[]> => {
  try {
    const res = await fetch("/api/events"); // Calls your API
    const data = await res.json();

    console.log("✅ API Response:", data);

    // Check if the response is actually an array
    if (!Array.isArray(data)) {
      console.error("API did not return an array!", data);
      return [];
    }

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

      if (!Array.isArray(events)) {
        console.error("events is not an array, cannot filter!");
        return;
      }

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
