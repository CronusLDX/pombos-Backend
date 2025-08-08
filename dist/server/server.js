"use strict";
const express = require('express');
const ClientControllers = require('../controllers/client.controller');
const PidgeyController = require('../controllers/pidgey.controller');
const MailController = require('../controllers/mail.controller');
const Cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const multer = require('multer');
const path = require('path');
class Server {
    app;
    constructor() {
        this.app = express();
        this.Middleware();
        this.Routes();
    }
    Middleware() {
        this.app.use(Cors({ origin: 'http://localhost:5173' }));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(helmet());
        const limiter = rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // limite para cada IP fazer 100 requisicoes
            message: 'Muitas requisições deste IP, tente novamente mais tarde.',
        });
        this.app.use(limiter);
    }
    Listen(port) {
        this.app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    }
    Routes() {
        const router = express.Router();
        // Cliente GET
        router.get('/clientes', ClientControllers.getRequisition);
        // Cliente POST
        router.post('/clientes', ClientControllers.postRequisition);
        // Cliente PUT
        router.put('/clientes/:id', ClientControllers.putRequisition);
        // Cliente DELETE
        router.delete('/clientes/:id', ClientControllers.deleteRequisition);
        // Pombos GET
        router.get('/pombos', PidgeyController.getRequisition);
        // Pombos POST
        router.post('/pombos', PidgeyController.postRequisition);
        // Pombos PUT
        router.put('/pombos/:id', PidgeyController.putRequisition);
        // Pombos DELETE
        router.delete('/pombos/:id', PidgeyController.deleteRequisition);
        // Carta GET
        router.get('/cartas', MailController.getRequisition);
        // Carta POST
        router.post('/cartas', MailController.postRequisition);
        // Carta PUT
        router.put('/cartas/:id', MailController.putRequisition);
        // Carta DELETE
        router.delete('/cartas/:id', MailController.deleteRequisition);
        this.app.use(router);
    }
}
module.exports = Server;
