const FindMotoboy = require('./FindMotoboy');
const ListMotoboy = require('./ListMotoboy');
const ListMotoboyAvailableForStore = require('./ListMotoboyAvailableForStore');
const repository = require("../../../infra/repositories/motoboys.json");


const findMotoboy = new FindMotoboy(repository);
const listMotoboy = new ListMotoboy(repository);
const listMotoboyAvailableForStore = new ListMotoboyAvailableForStore(repository);


module.exports = { findMotoboy, listMotoboy, listMotoboyAvailableForStore };