const Book = require('../models/book');

module.exports = {
  getAllBooks: async () => {
    try {
      const res = await Book
        .find({}, 'title summary isbn author')
        .exec();

      return Promise.resolve(res);
    } catch (e) {
      return Promise.reject(e);
    }
  },
};