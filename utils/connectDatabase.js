import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db('nextjs_project');
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllCommentsByEvent(client, collection, eventId) {
  const db = client.db();
  const comments = await db
    .collection(collection)
    .find({ eventId })
    .sort({ _id: -1 })
    .toArray();
  return comments;
}