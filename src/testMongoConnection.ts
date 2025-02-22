import { MongoClient } from "mongodb";
require("dotenv").config(); // Load .env variables

console.log("Starting MongoDB connection test...");

const uri = process.env.MONGO_URI; // MongoDB connection string from .env

async function testConnection() {
  if (!uri) {
    console.error("MONGO_URI is not defined. Check your .env file!");
    return;
  }

  console.log("Mongo URI loaded successfully!");

  const client = new MongoClient(uri);
  try {
    console.log("Attempting to connect to MongoDB...");
    await client.connect(); // Connect to MongoDB
    console.log("Connected to MongoDB successfully!");

    // Access the database and collection
    const db = client.db("eventsDB"); // Replace "eventsDB" with your database name
    const events = await db.collection("events").find().toArray();

    if (events.length > 0) {
      console.log("Events found in the database:", events);
    } else {
      console.log("No events found in the database!");
    }
  } catch (error) {
    console.error("Failed to connect to MongoDB or fetch events:", error);
  } finally {
    await client.close(); // Close the connection
    console.log("Connection closed.");
  }
}

testConnection();
