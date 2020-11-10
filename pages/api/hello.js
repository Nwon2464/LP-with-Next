// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Just like Express Server. You can access as you name it =>localhost:3000/api/hello
// also good for oauth, jwt 
export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
