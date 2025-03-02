"use client";

import React, { useEffect, useState } from "react";
import EventCard from "../EventCard"; // Ensure this path is correct
import styles from "../styles/EventsPage.module.css"; // Ensure this path is correct

type Event = {
  _id: string;
  title: string;
  description?: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
};

const UpcomingEventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();

        if (!Array.isArray(data)) {
          console.error("API response is not an array:", data);
          return;
        }

        // ✅ Convert MongoDB date format and filter future events
        const now = new Date();
        const upcoming = data.filter((event: Event) => {
          const eventDate = new Date(event.date);
          return eventDate > now;
        });

        setUpcomingEvents(upcoming);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className={styles.eventsPage}>
      <h1 className={styles.pageTitle}>Upcoming Events</h1>

      {loading ? (
        <p>Loading events...</p>
      ) : upcomingEvents.length > 0 ? (
        <div className={styles.eventsList}>
          {upcomingEvents.map((event) => (
            <EventCard
              key={event._id}
              title={event.title}
              description={event.description || "No description available."}
              date={event.date}
              time={event.time}
              location={event.location}
              imageUrl={event.imageUrl || "/placeholder.png"}
            />
          ))}
        </div>
      ) : (
        <p className={styles.noEvents}>No upcoming events found.</p>
      )}
    </div>
  );
};

export default UpcomingEventsPage;
