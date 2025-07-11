export default class PetDTO {
    static getPetInputFrom = (data) => {
        // Acepta tanto 'specie' como 'species' pero prioriza 'specie'
        const specie = data.specie || data.species;
        
        if (!specie) {
            throw new Error("Especie es requerida");
        }

        return {
            name: data.name?.trim() || '',
            specie: specie.trim(), // Usamos 'specie' (singular) para coincidir con el modelo
            birthDate: data.birthDate || data.birthday ? new Date(data.birthDate || data.birthday) : undefined,
            image: data.image?.trim() || '',
            adopted: data.adopted || false
        };
    };

    static getPetOutputFrom = (pet) => ({
        id: pet._id,
        name: pet.name,
        specie: pet.specie, // Coherente con el modelo
        birthDate: pet.birthDate?.toISOString().split('T')[0], // Formato YYYY-MM-DD
        adopted: pet.adopted,
        image: pet.image,
        owner: pet.owner
    });
}