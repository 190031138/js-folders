const express = require('express');

const router = express.Router();

const bookController = require('../controllers/controller');

router.post('/books',bookController.addBook);

router.get('/fetch-books',bookController.fetchBooks);

router.get('/fetch-book-by-author/:id',bookController.fetchBookByAuthor);

router.get('/fetch-book-by-title/:id',bookController.fetchBookByTitle);

// router.put('/modify-books/:id',bookController.updateBooksById);

module.exports = router;
