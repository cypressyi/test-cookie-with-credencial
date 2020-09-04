import cookie from 'cookie';

export default (req, res) => {
  res.statusCode = 200
  const { test_token } = cookie.parse(req.headers.cookie || '');

  if (test_token) {
    res.json({ message: test_token })
  } else {
    res.json({ message: 'No cookie!' })
  }
}
