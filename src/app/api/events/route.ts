import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongo";

export async function GET() {
  try {
    const client = await clientPromise; // Use the clientPromise from mongo.ts
    const db = client.db("eventsDB"); // Replace "eventsDB" with your actual database name
    const events = await db.collection("events").find().toArray();

    return NextResponse.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
