const app = require('./app');

const logger = require('./api/config/index')

const { NODE_PORT } = require('./api/config/environement');

app.listen(NODE_PORT, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${ NODE_PORT }`);
});