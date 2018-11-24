import express from 'express';
import fetchUsers from '../fetchFromDS/fetchUsers';

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  fetchUsers(200).then((data) => {
    res.send(data);
  }).catch((r) => {
    console.error(`error while fetching the user details: ${r}`);
  });
});

export default usersRouter;
