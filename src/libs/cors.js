// lib/cors.js
export default function cors(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Adjust as needed
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  next();
}
