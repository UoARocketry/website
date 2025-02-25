import client from "../../../lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = client.db("eventsDB");
    const events = await db.collection("events").find().toArray();
    return NextResponse.json(events);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const db = client.db("eventsDB");
    const { title, description, date, time, location } = await req.json();
    const result = await db.collection("events").insertOne({
      title,
      description,
      date,
      time,
      location,
    });

    //Check if the event was created successfully and return the appropriate response
    if (!result.acknowledged) {
      return NextResponse.json(
        { error: "Failed to create event" },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: "Event created successfully" },
        { status: 200 }
      );
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
