import { NextResponse } from "next/server";
import connectDb from "@/lib/mongo"; // ✅ Use default import

export async function GET() {
  try {
    const db = await connectDb(); // ✅ Ensure database is connected
    const eventsCollection = db.collection("events"); // ✅ Fetch the collection

    const events = await eventsCollection.find().toArray(); // ✅ Fetch events
    return NextResponse.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
