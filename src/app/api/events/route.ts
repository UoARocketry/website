import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI as string;
const client = new MongoClient(MONGO_URI);

export async function GET() {
  try {
    console.log("🔍 Connecting to MongoDB...");
    await client.connect();
    const db = client.db("eventsDB"); // Make sure this is correct
    const events = await db.collection("events").find().toArray();

    console.log("✅ Events fetched:", events);
    return NextResponse.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to load events" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
