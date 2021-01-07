/* jshint esversion: 6 */

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/noderest', {useNewUrlParser: true,
                                                  useUnifiedTopology: true, 
                                                  useCreateIndex: true});

module.exports = mongoose;