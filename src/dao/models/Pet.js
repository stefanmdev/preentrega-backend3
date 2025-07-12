import mongoose from 'mongoose';

const collection = 'Pets';

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    specie: {  
        type: String,
        required: true,
        trim: true,
        enum: ['Perro', 'Gato', 'Conejo', 'Ave', 'Otro'] 
    },
    birthday: {  
        type: Date,
        validate: {
            validator: (date) => date <= new Date(),
            message: 'La fecha no puede ser futura'
        }
    },
    adopted: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Users'
    },
    image: {
        type: String,
        default: ''
    }
}, { timestamps: true }); 

const petModel = mongoose.model(collection, schema);

export default petModel;