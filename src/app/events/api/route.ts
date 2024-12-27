import { NextResponse } from 'next/server';
import { getEventsCollection } from '@/models/Event';

// Fetch all events
export async function GET() {
  const eventsCollection = await getEventsCollection();
  const events = await eventsCollection.find({}).toArray(); // Fetch all events
  return NextResponse.json(events); // Return the events as JSON
}

// Create a new event
export async function POST(req: Request) {
  const eventsCollection = await getEventsCollection();
  const formData = await req.json(); // Parse request body

  const { title, date, time, location, imageUrl } = formData; // Extract fields

  const newEvent = {
    title,
    date,
    time,
    location,
    imageUrl,
    createdAt: new Date(),
  };

  const result = await eventsCollection.insertOne(newEvent); // Insert the event
  return NextResponse.json({ id: result.insertedId, ...newEvent }, { status: 201 }); // Return the created event
}
