import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
<<<<<<< HEAD
  // تخطي التحقق من الرموز مؤقتًا للسماح بجميع الطلبات دون مصادقة
  next();

  // الرمز الأصلي للتحقق من الرموز:
  // const token = req.cookies.access_token;
  // if (!token) {
  //   return next(createError(401, "You are not authenticated!"));
  // }

  // jwt.verify(token, process.env.JWT, (err, user) => {
  //   if (err) return next(createError(403, "Token is not valid!"));
  //   req.user = user;
  //   next();
  // });
};

export const verifyUser = (req, res, next) => {
  // تخطي التحقق من الرموز مؤقتًا للسماح بجميع الطلبات دون مصادقة
  next();

  // الرمز الأصلي للتحقق من الرموز للمستخدمين:
  // verifyToken(req, res, next, () => {
  //   if (req.user.id === req.params.id || req.user.isAdmin) {
  //     next();
  //   } else {
  //     return next(createError(403, "You are not authorized!"));
  //   }
  // });
};

export const verifyAdmin = (req, res, next) => {
  // تخطي التحقق من الرموز مؤقتًا للسماح بجميع الطلبات دون مصادقة
  next();

  // الرمز الأصلي للتحقق من الرموز للمسؤولين:
  // verifyToken(req, res, next, () => {
  //   if (req.user.isAdmin) {
  //     next();
  //   } else {
  //     return next(createError(403, "You are not authorized!"));
  //   }
  // });
=======
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

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
};
