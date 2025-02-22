import React from "react";

type EventCardProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  time,
  location,
}) => {
  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        {date} at {time}
      </p>
      <p>{location}</p>
    </div>
  );
};

export default EventCard;
