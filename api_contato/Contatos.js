const db = require("./db");

const Contatos = db.sequelize.define('Contatos', {
    nome: {type : db.Sequelize.STRING(100)},
    email: {type : db.Sequelize.STRING(50)}
});

module.exports = Contatos;

Contatos.sync({force:false});