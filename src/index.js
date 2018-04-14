import chokidar from 'chokidar';

// Class to handle applying conf changes
import Conf from './Conf';

const conf = new Conf();

// Watch for any changes to the nginx conf files
chokidar
  .watch(['nginx/nginx.conf', 'nginx/conf.d'])
  .on('all', () => {
    // Upon change, reload the nginx conf files
    conf.reload();
  });
