// Set your environment variables to enable the tests
var uf = require('util').format,
    envNames = ['FIVE_PX_CONSUMER_KEY', 'FIVE_PX_USER_ID', 
                'FIVE_PX_USER_NAME', 'FIVE_PX_USER_EMAIL'];

envNames.forEach(function(envName) {
  if (!process.env[envName]) {
    console.error(uf('  \033[1;31m ERROR\033[0m: Please set your environment variable - %s', envName));
  }
});

module.exports = {
  "secrets": {
    "consumer_key": process.env.FIVE_PX_CONSUMER_KEY,
    "user_id": process.env.FIVE_PX_USER_ID,
    "user_name": process.env.FIVE_PX_USER_NAME,
    "user_email": process.env.FIVE_PX_USER_EMAIL
  }
};
