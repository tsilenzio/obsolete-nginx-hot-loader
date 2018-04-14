const chokidar = require('chokidar');

// Class to handle applying conf changes
const Conf = require('./src/Conf');

let conf = new Conf();

// Watch for any changes to the nginx conf files
let watcher = chokidar
  .watch(['nginx/nginx.conf', 'nginx/conf.d'])
  .on('all', (event, path) => {
    // Upon change, reload the nginx conf files
    conf.reload();
  });
