const spawn = require('child_process').spawn;

let _executing = false;

// External class for handling conf reloading
module.exports = class Conf {
  reload() {
    new Ansible();
  }
}

// Internal class to handle ansible for nginx conf handling
class Ansible {
  constructor() {
    // Prevent running the command concurrently
    if(!_executing) {
      _executing = true;
      this.exec();
    }
  }

  exec() {
    // Instruct ansible to run the nginx playbook
    spawn('ansible-playbook', ['playbooks/nginx.yml'], {
      shell: true,
      stdio: 'inherit'
    }).on('close', function() {
      _executing = false;
    });
  }
}
