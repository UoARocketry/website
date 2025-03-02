import { MongoClient, Db } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI; // Read MongoDB URI from .env.local

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable in .env.local');
}

const client = new MongoClient(MONGO_URI); // Create MongoDB client
let db: Db | null = null; // Database instance

// Function to connect to MongoDB and return the database instance
const connectDb = async (): Promise<Db> => {
  if (!db) {
    await client.connect();
    db = client.db(); // Connect to the database
    console.log('✅ Connected to MongoDB');
  }
  return db;
};

export default connectDb; // ✅ Default export
