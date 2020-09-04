import { serialize } from 'cookie';

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Set-Cookie', serialize('test_token', 'Test_credencial_cookie', { path: '/', maxAge: -1 }));
  res.json({ message: 'Delete cookie' })
}
