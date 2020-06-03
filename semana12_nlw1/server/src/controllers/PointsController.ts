import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {

    async create(request: Request, response: Response) {

        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;

        const trx = await knex.transaction();                           // nao ta(va) funcionando com transaction

        const point = {
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };
    
        const insertedIds = await trx('points').insert(point);
        // const insertedIds = await knex('points').insert(point);      // sem transaction
    
        const point_id = insertedIds[0];
    
        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id: point_id,
            }
        });
    
        await trx('point_items').insert(pointItems);
        // await knex('point_items').insert(pointItems);                // sem transaction

        await trx.commit();

        return trx.isCompleted() ? response.json({
            success: true,
            id: point_id,
            ...point,
            items: items
        }) : response.json({ success: false }) ;
    }
}

export default PointsController;