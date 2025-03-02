type EventCardProps = {
  title: string;
  description?: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
};

const EventCard: React.FC<EventCardProps> = ({ title, description, date, time, location, imageUrl }) => {
  return (
    <div className="eventCard">
      <img src={imageUrl || "/placeholder.png"} alt={title} className="eventImage" />
      <h3>{title}</h3>
      <p>{description || "No description available."}</p>
      <p>{date} at {time}</p>
      <p>{location}</p>
    </div>
  );
};

export default EventCard;
