import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongo"; // Ensure correct import

export async function GET() {
  try {
    console.log("🔍 Connecting to MongoDB...");
    const client = await clientPromise;
    const db = client.db("eventsDB"); // Ensure this matches your database name
    const events = await db.collection("events").find().toArray();

    console.log("Events fetched:", events);
    return NextResponse.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to load events" },
      { status: 500 }
    );
  }
}
