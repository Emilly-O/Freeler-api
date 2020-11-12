const mongoose = require('mongoose');

const Job = mongoose.model('Job');

module.exports = {
    async index(req, res){
        const jobs = await Job.find()

        return res.json(jobs);
    }
}