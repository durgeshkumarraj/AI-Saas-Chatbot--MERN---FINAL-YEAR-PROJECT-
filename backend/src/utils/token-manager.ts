

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

// Function to create a JWT token
export const createToken = (id: string, email: string, expiresIn: string) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const payload = { id, email };
  return jwt.sign(payload, secret as string, { expiresIn: expiresIn as jwt.SignOptions["expiresIn"] });
};

// Middleware to verify JWT token
export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.signedCookies[COOKIE_NAME];

    if (!token || token.trim() === "") {
      return res.status(401).json({ message: "Token Not Received" });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return res.status(500).json({ message: "JWT_SECRET is missing in server configuration" });
    }

    jwt.verify(token, secret as string, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token Expired or Invalid" });
      }

      res.locals.jwtData = decoded;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
