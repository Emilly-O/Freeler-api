const express = require('express');
const routes = express.Router();

const JobController = require('./controllers/JobController')

routes.get('/jobs', JobController.index)

module.exports = routes;
