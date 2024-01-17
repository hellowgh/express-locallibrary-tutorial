const Book = require('../models/book');

const asyncHandler = require('express-async-handler');

exports.allBooks = asyncHandler(async (req, res, next) => {
  const books = Book.find().exec();

  res.send('hello');
});

