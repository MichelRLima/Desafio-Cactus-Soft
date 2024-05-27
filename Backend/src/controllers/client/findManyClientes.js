const logger = require("../../custom/logger");
const findManyClientes = require("../../models/findManyClientes");

module.exports = {
  async handle(req, res) {
    try {
      const clients = await findManyClientes.execute();

      logger.info("successfully found clients");
      res.status(200).json(clients);
    } catch (error) {
      if (!error.path) {
        logger.error(`Erro ao buscar clientes: ${error.message}`);
        logger.error(error.stack);
        error.path = "src/controllers/client/findManyClientes.js";
      }
      throw error;
    }
  },
};
