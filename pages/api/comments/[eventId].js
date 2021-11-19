import { MongoClient } from 'mongodb';
import validateEmail from '../../../utils/validateEmail';

async function handler(req, res) {
  const eventId = req.query.eventId;
  const client = await MongoClient.connect('mongodb+srv://mtgAdmin:Zqm55Dqub9Uxa5jc@cluster0.fkmmx.mongodb.net/nextjs_project?retryWrites=true&w=majority');
  const db = client.db('nextjs_project');

  if (req.method === 'GET') {
    const comments = await db
      .collection('comments')
      .find({ eventId })
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: comments });
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    if (!validateEmail(email)  || !name || name.trim() === '' || !text || text.trim() === '') {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId
    }

    const result = await db.collection('comments').insertOne(newComment);
    console.log(result);

    newComment.id = result.insertedId;

    res.status(201).json({ message: 'Added comment', comment: newComment });
  }
  client.close();
}

export default handler;