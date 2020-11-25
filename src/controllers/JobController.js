const mongoose = require('mongoose');
const Job = mongoose.model('Job');

module.exports = { // Consultando
    async index(req, res){
        const{ page = 1} = req.query
        const jobs = await Job.paginate({ }, { page, limit: 10})

        return res.json(jobs);
    },

    async show(req, res) {
        const job = await Job.findById(req.params.id);

        return res.json(job)
    },

    //Criando
    async store(req, res){
        const job = await Job.create(req.body);
        
        return res.json(job);
    },

    async update(req, res) {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body,
        { new: true })
        
        return res.json(job)
    },

    async destroy(req, res){
        await Job.findByIdAndRemove(req.params.id);

        return res.send()
    }
};