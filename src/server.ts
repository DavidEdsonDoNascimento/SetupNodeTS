import express from 'express';
import UserController from '@controllers/UserController';

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello world!' });
})

app.get('/users', (req, res) => {
    const users = UserController.list();

    return res.status(200).json({ users });
})

app.listen(3333);