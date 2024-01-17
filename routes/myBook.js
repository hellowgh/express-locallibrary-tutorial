const express = require('express');

const router = express.Router();

router.get('/all', (req, res, next) => {
  res.send('all books');
});

module.exports = router;