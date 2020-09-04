import { serialize } from "cookie";

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader(
    "Set-Cookie",
    serialize("test_token", "Test_credencial_cookie", {
      path: "/",
      httpOnly: true,
      sameSite: 'lax',
      secure: true
    })
  );
  res.json({ message: "Set cookie" });
};
