const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    addCustomer: {
        type: String,
        required: true,
    },
    whoHired: {
        type: String,
        required: true,
    },
    deliver: {
        type: String,
        required: true,
    },
    hours: {
        type: Number,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

mongoose.model('Job', JobSchema)