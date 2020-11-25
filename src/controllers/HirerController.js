const mongoose = require('mongoose');
const { show, store, update, destroy } = require('./JobController');
const Hirer = mongoose.model('Hirer');

module.exports = {
    async show(req, res) {
        const hirer = await Hirer.findById(req.params.id);

        return res.json(hirer)
    },

    async store(req, res){
        const hirer = await Hirer.create(req.body);

        return res.json(hirer);
    },

    async update(req, res){
        const hirer = await Hirer.findByIdAndUpdate(req.params.id, req.body,
            { new: true })

        return res.json(hirer)
    },

    async destroy(req, res){
        await Hirer.findByIdAndRemove(req.params.id);

        return res.send()
    }
};