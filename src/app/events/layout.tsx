import React from "react";

const EventsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="p-6 text-center text-2xl font-semibold bg-[#C2512C]">
        Events Portal
      </header>
      <main className="p-10">{children}</main>
      <footer className="p-4 text-center text-sm bg-[#C2512C]">
        © 2025 Rocket Club. All rights reserved.
      </footer>
    </div>
  );
};

export default EventsLayout;
