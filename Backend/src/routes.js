const { Router } = require("express");

const findByIdClientesController = require("./controllers/client/findManyClientes");
const getClientesForPlano = require("./controllers/client/getClientesForPlano");
const getAllPlanos = require("./controllers/client/getAllPlanos");
const getClienteById = require("./controllers/client/getClienteById");
const routes = Router();

//Rotas
routes.get("/findManyCliente", findByIdClientesController.handle);
routes.get("/getAllPlanos", getAllPlanos.handle);
routes.get("/getClientesForPlano", getClientesForPlano.handle);
routes.get("/getClienteById", getClienteById.handle);





module.exports = routes;
