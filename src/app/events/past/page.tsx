"use client";

import React, { useEffect, useState } from "react";
import EventCard from "../EventCard";
import styles from "../EventsPage.module.css";

type Event = {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
};

export default function PastEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        const now = new Date();
        const pastEvents = data.filter(
          (event: Event) => new Date(event.date) <= now
        );
        setEvents(pastEvents);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.eventsPage}>
      <h1>Past Events</h1>
      <div className={styles.eventsList}>
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event._id}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
            />
          ))
        ) : (
          <p>No past events found.</p>
        )}
      </div>
    </div>
  );
}
