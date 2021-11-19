function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

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