const ListStore = require('./ListStore');
const repository = require("../../../infra/repositories/stores.json");


const listStore = new ListStore(repository);


module.exports = { listStore };