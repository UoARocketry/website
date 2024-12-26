import { NextApiRequest, NextApiResponse } from "next";

const events = {
  upcoming: [
    {
      id: "1",
      title: "Rocket Launch",
      time: "9:00",
      date: "24/12/2024",
      location: "Silverdale, Auckland",
    },
    {
      id: "2",
      title: "Mars Exploration",
      time: "12:00",
      date: "25/12/2024",
      location: "Cape Canaveral, USA",
    },
  ],
  past: [
    {
      id: "3",
      title: "Moon Landing",
      time: "9:00",
      date: "20/07/1969",
      location: "NASA, Houston",
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const event =
    events.upcoming.find((e) => e.id === id) ||
    events.past.find((e) => e.id === id);

  if (event) {
    res.status(200).json(event);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
}
