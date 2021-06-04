// special path to send request to in the API
// localhost:3000/api/feedback

function handler(req, res) {
  res.status(200).json({
    message: 'hello world',
  });
}

export default handler;