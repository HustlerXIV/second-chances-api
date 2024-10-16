const jwt = require("jsonwebtoken");
const db = require("../db");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(403)
      .json({ error: "No token provided or token format invalid" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const tokenRecord = await db("Tokens")
      .where({ token })
      .where("expires_at", ">", new Date())
      .first();

    if (!tokenRecord) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Token not found or expired" });
    }

    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};

module.exports = authMiddleware;
