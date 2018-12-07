import express from 'express';
import path from 'path';
import getUsers from './users/Get';
import { getUserByUserName } from './fetchFromDS/fetchUsers';

const app = express();

app.use('/users', getUsers);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
app.use('/static', express.static(path.join(__dirname, '/static')));


app.use('/users/:userName', (req, res) => {
  const { params: { userName } } = req;
  console.log('uName', userName);
  getUserByUserName(userName, 200).then((data) => {
    console.log('data = ', data);
    const keys = Object.keys(data);
    res.render('intial', data[keys[keys.length - 1]]);
  }).catch((e) => {
    console.error('errror occured', e);
    res.render('intial', { error: true });
  });
});

app.use('/', (req, res) => {
  res.render('intial');
});

const hostname = '127.0.0.1';
const port = 8443;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);// eslint-disable-line
});
