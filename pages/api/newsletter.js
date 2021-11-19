import validateEmail from '../../utils/validateEmail';

function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!validateEmail(email)) {
      res.status(422).json({ message: 'Invalid email' });
      return;
    }

    console.log(email);
    res.status(201).json({ message: 'Signed up!' });
  }
}

export default handler;