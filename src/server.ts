import express from 'express';
import UserController from '@controllers/UserController';
import RestaurantService from '@services/RestaurantService';
import fetch from 'node-fetch';
import { User } from '@models/UserModel';

const PORT = 3333;
const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello world!' });
})

app.get('/users', (req, res) => {
    const users = UserController.list();

    return res.status(200).json({ users });
})

/**
 * Lista restaurantes do ifood e seus status
 */
app.get('/ifood/restaurants', async (req, res) => {

    try {

        let restaurants = await RestaurantService.list();

        await Promise.all(
            restaurants.map(restaurant => {

                const data = new Promise<any>(async (resolve, reject) => {

                    const url = `https://marketplace.ifood.com.br/v2/merchants/${restaurant.id}?channel=IFOOD`;
                    const timeout = 500;

                    const timer = setTimeout(() => {
                        reject(`fetch to ${url} exceeded ${timeout} ms`);
                    }, timeout);

                    return await fetch(url)
                        .then(response => response.json())
                        .then(r => resolve(r))
                        .catch(err => reject(err))
                        .finally(() => clearTimeout(timer));
                });

                data
                    .then(result => {
                        restaurant.name = result.name;
                        restaurant.open = result.available;
                    })
                    .catch(err => console.log(err));

            })
        );

        return res.status(200).json({ restaurants });

    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
});

app.listen(PORT, () => { console.log(`API running in port: ${PORT}`) });