import { MongoClient } from 'mongodb';

import validateEmail from '../../utils/validateEmail';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!validateEmail(email)) {
      res.status(422).json({ message: 'Invalid email' });
      return;
    }

    const client =await MongoClient.connect('mongodb+srv://mtgAdmin:Zqm55Dqub9Uxa5jc@cluster0.fkmmx.mongodb.net/nextjs_project?retryWrites=true&w=majority');
    const db = client.db('nextjs_project');
    await db.collection('newsletter').insertOne({ email });
    client.close();

    console.log(email);
    res.status(201).json({ message: 'Signed up!' });
  }
}

export default handler;