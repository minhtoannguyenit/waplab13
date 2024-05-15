const express = require('express');
const bookRouter = require('./routes/bookRouter');

const app = express();

app.use(express.json());
app.use('/books', bookRouter);


app.use((err, req, res, next) => {
  if (err.message === 'Book not found') {
    res.status(404).json({status: 'error', message: err.message});
  } else {
    next('error');
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({status: 'error', message: err.message});
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});