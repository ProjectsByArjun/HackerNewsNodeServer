import express from 'express';
import path from 'path';
import getUsers from './users/Get';

const app = express();

app.use('/users', getUsers);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
app.use('/static', express.static(path.join(__dirname, '/static')));

app.use('/', (req, res) => {
  res.render('intial');
});

const hostname = '127.0.0.1';
const port = 8443;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);// eslint-disable-line
});
