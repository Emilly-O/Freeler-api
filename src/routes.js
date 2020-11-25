const express = require('express');
const routes = express.Router();

const JobController = require('./controllers/JobController')

//JOB
routes.get('/jobs', JobController.index);
routes.get("/jobs/:id", JobController.show);
routes.post("/jobs", JobController.store);
routes.put("/jobs/:id", JobController.update);
routes.delete("/jobs/:id", JobController.destroy);

//HIRER
routes.get("/hirers/:id", HirerController.show);
routes.post("/hirers", HirerController.store);
routes.put("/hirers/:id", HirerController.update);
routes.delete("/hirers/:id", HirerController.destroy);

//USER
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

module.exports = routes;
