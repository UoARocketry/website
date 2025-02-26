import client from "../../../lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = client.db("rocketDB");
    const events = await db.collection("members").find().toArray();
    return NextResponse.json(events);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}