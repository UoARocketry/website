import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI as string; // MongoDB connection string from .env
let client: MongoClient | null = null;

export const connectMongo = async () => {
  if (client) {
    console.log('Using existing MongoDB connection');
    return client.db(); // Return the database object
  }

  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(); // Return the database object
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
};


