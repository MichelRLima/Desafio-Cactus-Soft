const logger = require("../../custom/logger");
const getAllPlanos = require("../../models/getAllPlanos");

module.exports = {
    async handle(req, res) {
        try {
            const clients = await getAllPlanos.execute();

            logger.info("successfully found clients");
            res.status(200).json(clients);
        } catch (error) {
            if (!error.path) {
                logger.error(`Erro ao buscar Planos: ${error.message}`);
                logger.error(error.stack);
                error.path = "src/controllers/client/getAllPlanos.js";
            }
            throw error;
        }
    },
};
