import validateEmail from '../../../utils/validateEmail';
import { connectDatabase, insertDocument, getAllCommentsByEvent } from '../../../utils/connectDatabase';

async function handler(req, res) {
  const eventId = req.query.eventId;
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed' });
    return;
  }

  if (req.method === 'GET') {
    let comments;
    try {
      comments = await getAllCommentsByEvent(client, 'comments', eventId);
      res.status(200).json({ comments: comments });

    } catch (error) {
      res.status(500).json({ message: 'Getting comments fails' });
      return;
    }
    client.close();
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

    let result;

    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: 'Added comment', comment: newComment });
    } catch (error) {
      res.status(500).json({ message: 'Inserting document failed' });
    }
  }
  client.close();
}

export default handler;