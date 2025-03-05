import React from "react";

interface EventCardProps {
  name: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string; // New prop for the event image
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  date,
  time,
  location,
  imageUrl,
}) => {
  return (
    <div className="bg-[#C2512C] text-white p-5 rounded-xl flex w-[604px] h-[268px] shadow-lg">
      {/* Image (or Placeholder) */}
      <div className="w-[300px] h-[238px] bg-gray-300 rounded-md overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      {/* Event Details */}
      <div className="w-[60%] pl-6 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-lg">{time}</p>
        <p className="text-lg font-semibold">{date}</p>
        <p className="text-sm leading-tight">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
