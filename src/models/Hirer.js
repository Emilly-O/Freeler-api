const mongoose = require('mongoose');

const HirerSchema = new mongoose.Schema({
    hirerName: {
        type: String,
        required: true,
    },
    cpf: {
        type: Number,
        required: true,
    },
    tel: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true
    }
})

mongoose.model('Hirer', HirerSchema)