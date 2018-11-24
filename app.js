
import express from 'express';

const db ={
  0:{
    fname: 'fname 0',
    lname: 'lname 0',
  },
  1:{
    fname: 'fname 1',
    lname: 'lname 1',
  },
  2:{
    fname: 'fname 2',
    lname: 'lname 2',
  },
  3:{
    fname: 'fname 3',
    lname: 'lname 3',
  },
  4:{
    fname: 'fname 4',
    lname: 'lname 4',
  },
};
// Set up the express app
const app = express();
const v0 = '/api/v0';
app.get(`${v0}/todos`, (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
