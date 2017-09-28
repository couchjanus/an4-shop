const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const indexController = require('../controllers/index');


router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Express!';
  indexController.sum(1, 2, (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.sum = results;
      res.render('index', renderObject);
    }
  });
});

//pg config
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'shop',
  user: 'dev',
  password: 'ghbdtn',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})


//Users
//get all users
router.get('/users', (req, res, next) => {
  pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      client.query('SELECT * FROM users', (err, result) => {
        release();
        if (err) {
          return console.error('Error executing query', err.stack);
        }
        console.log(result.rows);
        res.send(result.rows);
      });
  });

});


//post user
router.post('/users', (req, res, next) => {
    pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      
      let salt = bcrypt.genSaltSync();
      let hashpass = bcrypt.hashSync(req.body.password, salt);
      
      client.query('INSERT INTO users(username, password) VALUES($1, $2) returning id', [req.body.username, hashpass], (err, result) => {
        release();
        if (err) {
          return console.error('Error executing query', err.stack);
        }
        console.log(result.rows);
        res.send(result.rows);
      });
  });
});

//get one user
router.get('/users/:id', (req, res, next) => {
    pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      client.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, result) => {
        release();
        if (err) {
          return console.error('Error executing query', err.stack);
        }
        console.log(result.rows);
        res.send(result.rows);
      });
  });
  
});

// update user
router.put('/users/:id', (req, res, next) => {
  pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      
      let salt = bcrypt.genSaltSync();
      let hashpass = bcrypt.hashSync(req.body.password, salt);

      client.query('UPDATE users SET username = $2, password = $3  WHERE id = $1', [req.params.id, req.body.username, hashpass], (err, result) => {
        release();
        if (err) {
          return console.error('Error executing query', err.stack);
        }
        console.log(result.rows);
        res.send(result.rows);
      });
  });
 
});
//delete one user
router.delete('/users/:id', (req, res, next) => {

  pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      client.query('DELETE FROM users WHERE id = $1',[req.params.id], (err, result) => {
        release();
        if (err) {
          return console.error('Error executing query', err.stack);
        }
        console.log(result.rows);
        res.send(result.rows);
      });
  });

});

//get all poducts
router.get('/products', (req, res, next) => {
  pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      client.query('SELECT * FROM products', (err, result) => {
        release();
        if (err) {
          return console.error('Error executing query', err.stack);
        }
        console.log(result.rows);
        res.send(result.rows);
      });
  });

});


module.exports = router;
