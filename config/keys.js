if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
  console.log("asdsadas");
} else {
  module.exports = require('./keys_dev');
}
