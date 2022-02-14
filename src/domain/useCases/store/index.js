const ListStore = require('./ListStore');
const repository = require("../../../infra/repositories/stores.json");

//Instanciamento das classes
const listStore = new ListStore(repository);


module.exports = { listStore };