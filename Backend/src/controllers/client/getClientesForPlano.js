const logger = require("../../custom/logger");
const getClientesForPlano = require("../../models/getClientesForPlano");

module.exports = {
    async handle(req, res) {
        try {
            const plano = req.query.plano;
            const clients = await getClientesForPlano.execute(plano);

            logger.info("successfully found clients");
            res.status(200).json(clients);
        } catch (error) {
            if (!error.path) {
                logger.error(`Erro ao buscar clientes: ${error.message}`);
                logger.error(error.stack);
                error.path = "src/controllers/client/getClientesForPlano.js";
            }
            throw error;
        }
    },
};
