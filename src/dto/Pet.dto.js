export default class PetDTO {
    static getPetInputFrom = (data) => {
        
        const specie = data.specie || data.species;
        
        if (!specie) {
            throw new Error("Especie es requerida");
        }

        return {
            name: data.name?.trim() || '',
            specie: specie.trim(), 
            birthDate: data.birthDate || data.birthday ? new Date(data.birthDate || data.birthday) : undefined,
            image: data.image?.trim() || '',
            adopted: data.adopted || false
        };
    };

    static getPetOutputFrom = (pet) => ({
        id: pet._id,
        name: pet.name,
        specie: pet.specie, 
        birthDate: pet.birthDate?.toISOString().split('T')[0], 
        image: pet.image,
        owner: pet.owner
    });
}