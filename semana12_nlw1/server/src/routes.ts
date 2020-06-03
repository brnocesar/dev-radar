import express, { request, response } from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/', (request, response) => {

    return response.json({ message: 'Hello World'});
});

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id:         item.id,
            title:      item.title,
            image_url:  `http://localhost:3333/uploads/items/${item.image}`
        }
    });
    
    return response.json(serializedItems);
});

routes.post('/points', async (request, response) => {

    const {
        name,           // const name = request.body.name
        email,          // const email = request.body.email
        whatsapp,       // (...)
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    // const trx = await knex.transaction();                // nao ta funcionando com isso

    // const insertedIds = await trx('points').insert({
    const insertedIds = await knex('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    }); // quando o nome da variável é igual ao do atributo do objeto, como em 'image', nao preciso atribuir

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
        return {
            item_id,
            point_id: point_id,
        };
    });

    // await trx('point_items').insert(pointItems);
    await knex('point_items').insert(pointItems);

    return response.json({ success: true});
});

export default routes;