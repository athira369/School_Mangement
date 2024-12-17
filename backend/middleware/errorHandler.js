// // Centralized error handler middleware
// const errorHandler = (err, req, res, next) => {
//     // Set status code to 500 by default if not set
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error';
  
//     // Log the error (for debugging purposes)
//     console.error(err);
  
//     // Send error response to the client
//     res.status(statusCode).json({
//       message,
//       stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Hide stack trace in production
//     });
//   };
  
//   module.exports = errorHandler;
  // errorHandler.js

export const handleValidationError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  throw error;
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ success: false, message });
};
