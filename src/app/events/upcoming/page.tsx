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

const UpcomingEventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();

        if (!data.events || !Array.isArray(data.events)) {
          console.error("No events found in the API response.");
          return;
        }

        const now = new Date();
        const upcoming = data.events.filter(
          (event: Event) => new Date(event.date) > now
        );

        setUpcomingEvents(upcoming);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className={styles.eventsPage}>
      <h1>Upcoming Events</h1>
      {upcomingEvents.length > 0 ? (
        <div className={styles.eventsList}>
          {upcomingEvents.map((event) => (
            <EventCard
              key={event._id}
              id={event._id} // Map _id to id
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
            />
          ))}
        </div>
      ) : (
        <p>No upcoming events found.</p>
      )}
    </div>
  );
};

export default UpcomingEventsPage;
