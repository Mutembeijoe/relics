import Knex from 'knex';
const config = require('../knexfile')

const environment = process.env.NODE_ENV || "development";
const connection = Knex(config[environment])

export default connection;

