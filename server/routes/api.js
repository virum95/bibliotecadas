const express = require('express');
const router = express.Router();

const mongojs = require('mongojs');
const db = mongojs('mongodb://das:das2017@ds027505.mlab.com:27505/heroku_5tz53fd8', ['biblioteca', 'libros']);

/* GET All Books */
router.get('/books', function(req, res, next) {
  db.biblioteca.find(function(err, books) {
    if (err) {
      res.send(err);
    } else {
      res.json(books);
    }
  });
});

/* GET All Books */
router.get('/books/:title', function(req, res, next) {
  db.biblioteca.find( {title: new RegExp(req.params.title)} , function(err, books) {
    if (err) {
      res.send(err);
    } else {
      res.json(books);
    }
  });
});


/* GET All user Books */
router.get('/user', function(req, res, next) {
  db.libros.find(function(err, books) {
    if (err) {
      res.send(err);
    } else {
      res.json(books);
    }
  });
});

/* Buy a Book */
router.post('/user', function(req, res, next) {
  var book = req.body;
  if (!book.title || !book.author) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.libros.find( {"title": book.title } ).limit(1).count( function (err, result) {
      if (err) {
        res.status(400);
        res.json({
          "error": "An error ocurred"
        });
      } else if( result > 0 ){
        res.status(400);
        res.json({
          "error": "Already owned"
        });
      } else {
    db.libros.save(book, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
    }
    });
  }
});

/* Delete a user book*/
router.delete('/user/:title', function(req, res) {
  db.libros.remove({
    "title": req.params.title
  }, '', function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});


/* POST/SAVE a Book */
router.post('/books', function(req, res, next) {
  var book = req.body;
  if (!book.title || !book.author) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.biblioteca.save(book, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  }
});
/* PUT/UPDATE a Book*/
router.put('/books/:title', function(req, res, next) {
  var book = req.body;
  if (!book.description) {
    res.status(400);
    res.json({
      "error": "Invalid Data"
    });
  } else {
    db.biblioteca.update({
      title: req.params.title
    }, {title: book.title, author: book.author, description: book.description}, {}, function(err, result) {

      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
});
/* DELETE a Book */
router.delete('/books/:title', function(req, res) {
  db.biblioteca.remove({
    "title": req.params.title
  }, '', function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});



module.exports = router;
