const morgan = require('morgan')
// const path = require('path')
// const rfs = require('rotating-file-stream');

// create a rotating write stream
// const accessLogStream = rfs.createStream('access.log', {
//   interval: '1d', // rotate daily
//   maxFiles: 30,
//   path: path.join(__dirname, 'logs')
// })
 
// export the logger
// const logger = morgan('combined', { stream: accessLogStream });
const logger = morgan('combined');

export default logger;

 