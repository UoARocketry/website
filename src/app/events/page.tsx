"use client";

import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import styles from "./EventsPage.module.css";

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
};

const EventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      console.log("fetching events");
      try {
        const response = await fetch("/api/events");
        const data = await response.json();

        console.log(data);

        if (!data || !Array.isArray(data)) {
          console.error("No events found in the API response.");
          return;
        }

        const now = new Date();
        const upcoming = data.filter(
          (event: Event) => new Date(event.date) > now
        );
        const past = data.filter((event: Event) => new Date(event.date) <= now);

        setUpcomingEvents(upcoming);
        setPastEvents(past);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const addEvent = async () => {
    const newEvent = {
      title: "THis is fun",
      description: "This is a fun event=",
      date: new Date("2026-12-31"),
      time: "18:00",
      location: "Location of the new event",
    };

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      console.log(response);

      if (response.ok) {
        const addedEvent = await response.json();
        setUpcomingEvents((prevEvents) => [...prevEvents, addedEvent]);
      } else {
        console.error("Failed to add event");
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <div className={styles.eventsPage}>
      <button onClick={addEvent}>Add Event</button>
      <h1>Upcoming Events</h1>
      {upcomingEvents.length > 0 ? (
        <div className={styles.eventsList}>
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      ) : (
        <p>No upcoming events found.</p>
      )}

      <h1>Past Events</h1>
      {pastEvents.length > 0 ? (
        <div className={styles.eventsList}>
          {pastEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      ) : (
        <p>No past events found.</p>
      )}
    </div>
  );
};

export default EventsPage;
