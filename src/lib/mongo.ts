import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("MONGO_URI is not defined in your .env file");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Add a type declaration for the global variable
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise; // Default export
