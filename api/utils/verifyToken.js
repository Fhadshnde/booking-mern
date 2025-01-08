import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

// Middleware to verify JWT token
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

// Middleware to verify if the user is the one making the request or an admin
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    // Check if the user ID matches the requested ID or if the user is an admin
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

// Middleware to verify if the user is an admin
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    // Check if the user is an admin
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
