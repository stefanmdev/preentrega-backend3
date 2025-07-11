import mongoose from 'mongoose';
import { adoptionsService, petsService } from '../services/index.js';

export default class AdoptionsController {
    static async getAllAdoptions(req, res) {
        try {
            const adoptions = await adoptionsService.get({});
            res.status(200).json({
                status: 'success',
                payload: adoptions
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                error: error.message
            });
        }
    }

    static async getAdoption(req, res) {
        try {
            const { id } = req.params;
            const adoption = await adoptionsService.getBy({ _id: id });
            
            if (!adoption) {
                return res.status(404).json({
                    status: 'error',
                    error: 'Adopción no encontrada'
                });
            }

            res.status(200).json({
                status: 'success',
                payload: adoption
            });
        } catch (error) {
            res.status(400).json({
                status: 'error',
                error: error.message
            });
        }
    }

    static async createAdoption(req, res) {
        try {
            const { userId, petId } = req.body;

            if (!userId || !petId) {
                return res.status(400).json({
                    status: 'error',
                    error: 'userId and petId are required'
                });
            }

            const pet = await petsService.getBy({ _id: petId });
            if (!pet) {
                return res.status(404).json({
                    status: 'error',
                    error: 'Pet not found'
                });
            }

            if (pet.adopted) {
                return res.status(400).json({
                    status: 'error',
                    error: 'Pet already adopted'
                });
            }

            const adoption = await adoptionsService.save({
                owner: userId,
                pet: petId
            });

            await petsService.update(petId, { 
                adopted: true, 
                owner: userId 
            });

            res.status(201).json({
                status: 'success',
                payload: adoption
            });
        } catch (error) {
            res.status(400).json({
                status: 'error',
                error: error.message
            });
        }
    }
}