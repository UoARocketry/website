import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// 1. Get MongoDB URI from your environment variable
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local (MONGODB_URI).");
}

// 2. Create a cached connection (recommended for Next.js)
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // allow global var to survive module reloads (dev mode)
  // so we don’t create a new client on every request
  // This is only for dev convenience.
  // In production, it won't pollute the global namespace.
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// 3. Handle GET request
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("myDatabaseName");  // ← Replace with your DB name
    const collection = db.collection("blogPosts"); // ← Replace with your collection name

    // 4. Fetch all blog posts
    const posts = await collection.find({}).toArray();

    // Return as JSON
    return NextResponse.json(posts);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
