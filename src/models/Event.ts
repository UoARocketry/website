import { Db } from 'mongodb';
import { connectMongo } from '@/lib/mongo';

// Define a function to get the collection
export async function getEventsCollection() {
  const db: Db = await connectMongo();
  return db.collection('events'); // Return the `events` collection
}
