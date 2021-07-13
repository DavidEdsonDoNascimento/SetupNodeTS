import express from 'express';
import UserController from '@controllers/UserController';
import RestaurantService from '@services/RestaurantService';
import fetch from 'node-fetch';
import { User } from '@models/UserModel';


const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello world!' });
})

app.get('/users', (req, res) => {
    const users = UserController.list();

    return res.status(200).json({ users });
})



app.get('/ifood/restaurants', async (req, res) => {
    
    try{ 

        let restaurants = await RestaurantService.list();

        restaurants.map(restaurant => {
            
            const data = new Promise<any>(async (resolve, reject) => {

                return await fetch(`https://marketplace.ifood.com.br/v2/merchants/${restaurant.id}?channel=IFOOD`)
                .then(response => response.json())
                .then(r => resolve(r))
                .catch(err => reject(err));
            });

            data
            .then(result => {
                restaurant.name = result.name;
                restaurant.open = result.available;
            })
            .catch(err => console.log(err));

        });

        return res.status(200).json({ restaurants });
    
    } catch (err){
        return res.status(400).json({ message: err.message})    
    }
});

app.listen(3333);