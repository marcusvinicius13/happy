import { Request, Response} from 'express';

import { getRepository } from 'typeorm';
import Orphanage from  '../models/Orphanage';
import orphanages_view from '../views/orphanages_view';

export default {

    async index(request: Request, response: Response) {
        // Repetido
        const orphanagesRepository = getRepository(Orphanage);
       
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });
       
        return response.status(200).json(orphanages_view.renderMany(orphanages));
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        
        // Repetido
        const orphanagesRepository = getRepository(Orphanage);
        
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });
       
        return response.status(200).json(orphanages_view.render(orphanage));
    },

    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        }  = request.body;
    
        // Repetido
        const orphanagesRepository = getRepository(Orphanage);

        /*
            Trabalhando com multiplos arquivos 
        */
        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return {path: image.filename}
        });

        // Fim
    
        const orphanage = orphanagesRepository.create(
            {
                name,
                latitude,
                longitude,
                about,
                instructions,
                opening_hours,
                open_on_weekends, 
                images
            }
        );
    
        await orphanagesRepository.save(orphanage);
        
        return response.status(201).json(orphanage);
    }

};