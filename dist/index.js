"use strict";
const server = require('./server/server');
const dotenv = require('dotenv');
const database = require('./database/database');
dotenv.config();
const port = 8080;
const serverOne = new server();
const connection = new database();
const main = async () => {
    try {
        await connection;
    }
    catch (error) {
        console.log(error);
    }
};
main()
    .then(() => console.log('Conectado ao banco de dados com sucesso!'))
    .catch(error => console.log(error))
    .finally(() => {
    serverOne.Listen(port);
});
