const mongoose = require('mongoose');
const config = require('../config/index')

const pass = config.db.password.length ? `:${config.db.password}` : "";

const auth = config.db.user.length ? `${config.db.user}${pass}@` : "";

//example - mongodb://localhost:27017/dbName
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, () => {

    console.log('mongoose connected to db');

});