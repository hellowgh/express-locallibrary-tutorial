const express = require('express');
const router = express.Router();
const bookService = require('../service/book');

router.get('/all', async (req, res, next) => {
  return res.send(await bookService.getAllBooks());
});

module.exports = router;