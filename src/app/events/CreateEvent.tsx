"use client";
import Image from "next/image";

type EventType = {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
};

export default function EventCard({ event }: { event: EventType }) {
  return (
    <div className="bg-[#C34F27] text-white rounded-xl shadow-lg p-4 border border-gray-700">
      {/* Event Image */}
      <div className="w-full h-40 bg-gray-300 rounded-lg overflow-hidden flex justify-center items-center">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            width={350}
            height={160}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="text-gray-500 text-sm">No Image Available</div>
        )}
      </div>

      {/* Event Details */}
      <div className="p-3 text-center">
        <h2 className="text-xl font-bold">{event.title}</h2>
        <p className="text-sm text-gray-200 mt-1">{event.description}</p>
        <p className="text-sm mt-2">
          {event.date} at {event.time}
        </p>
        <p className="text-sm mt-1">{event.location}</p>
      </div>
    </div>
  );
}
