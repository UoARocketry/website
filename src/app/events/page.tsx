import React from "react";
import Link from "next/link";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-center text-5xl font-semibold mb-10 font-montserrat">
        Events
      </h1>

      {/* Links to Upcoming & Past Events */}
      <div className="flex justify-center gap-10 mb-10">
        <Link href="/events/upcoming">
          <button className="px-6 py-3 bg-[#C2512C] text-white text-lg rounded-lg shadow-lg hover:bg-[#a14024]">
            Upcoming Events
          </button>
        </Link>
        <Link href="/events/past">
          <button className="px-6 py-3 bg-[#C2512C] text-white text-lg rounded-lg shadow-lg hover:bg-[#a14024]">
            Past Events
          </button>
        </Link>
      </div>

      <p className="text-center text-lg">Choose a category to view events.</p>
    </div>
  );
};

export default EventsPage;
