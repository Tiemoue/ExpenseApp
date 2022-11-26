const routes = require('express').Router();
const controller = require('../controller/controller');

routes.route('/api/categories')
    .post(controller.create_Categories);
    .get(controller)

module.exports = routes;