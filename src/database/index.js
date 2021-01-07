/* jshint esversion: 6 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', {useMongoCLient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;