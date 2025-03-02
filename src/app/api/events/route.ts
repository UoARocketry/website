import { NextResponse } from 'next/server';
import connectDb from '@/lib/mongo'; // ✅ Import default

export async function GET() {
  try {
    const db = await connectDb(); // ✅ Get the database instance
    const eventsCollection = db.collection('events'); // ✅ Fetch the events collection

    const events = await eventsCollection.find().toArray(); // ✅ Fetch all events
    console.log('Events fetched:', events); // Debugging log

    return NextResponse.json(events);
  } catch (error) {
    console.error(' Error fetching events:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

