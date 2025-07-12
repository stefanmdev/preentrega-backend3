import PetDTO from "../dto/Pet.dto.js";
import { petsService } from "../services/index.js";

const getAllPets = async (req, res) => {
    try {
        const pets = await petsService.getAll();
        res.send({ status: "success", payload: pets });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};

const createPet = async (req, res) => {
    const { name, specie, birthDate } = req.body; 

    if (!name || !specie) {
        return res.status(400).send({ 
            status: "error", 
            error: "Nombre y especie son requeridos" 
        });
    }

    try {
        const petData = PetDTO.getPetInputFrom(req.body);
        const result = await petsService.create(petData);
        res.status(201).send({ 
            status: "success", 
            payload: PetDTO.getPetOutputFrom(result)
        });
    } catch (error) {
        res.status(400).send({ 
            status: "error", 
            error: error.message 
        });
    }
};

const updatePet = async (req, res) => {
    try {
        const result = await petsService.update(
            req.params.pid, 
            req.body
        );
        res.send({ 
            status: "success", 
            payload: result 
        });
    } catch (error) {
        res.status(400).send({ 
            status: "error", 
            error: error.message 
        });
    }
};

const deletePet = async (req, res) => {
    try {
        await petsService.delete(req.params.pid);
        res.send({ status: "success", message: "Mascota eliminada" });
    } catch (error) {
        res.status(400).send({ 
            status: "error", 
            error: error.message 
        });
    }
};

export default {
    getAllPets,
    createPet,
    updatePet,
    deletePet
};