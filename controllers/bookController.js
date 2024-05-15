const Book = require('../models/book');

exports.getAll = (req, res, next) => {
  res.status(200).json({status: true, data: Book.getAll()});
};

exports.getBookById = (req, res, next) => {
  res.status(200).json({status: true, data: Book.getBookById(parseInt(req.params.id))});
}

exports.create = (req, res) => {
  const book = (new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author)).save();
  res.status(201).json({status: true, data: book});
}

exports.update = (req, res, next) => {
  const book = (new Book(null, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author)).update(parseInt(req.params.id));
  res.status(200).json({status: true, data: book});
}

exports.deleteBookById = (req, res, next) => {
  Book.deleteBookById(parseInt(req.params.id));
  res.status(200).json({status: true, message: 'Book deleted successfully'});
}
