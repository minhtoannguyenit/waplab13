const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', bookController.getAll);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.create);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.deleteBookById);

module.exports = router;