const logger = require('./logger')(__filename);

logger.info('Hello world');
logger.debug('Debugging info')

module.exports = logger;